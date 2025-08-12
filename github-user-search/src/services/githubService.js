import axios from "axios";
import Githubstore from "../stores/Githubstore";

async function fetchUserData() {
  const { searching, page } = Githubstore.getState();
  const setUsers = Githubstore.getState().setUsers;
  const setUserLoading = Githubstore.getState().setUserLoading;
  const setUserError = Githubstore.getState().setUserError;

  if (!searching || !searching.username) return;

  setUserLoading(true);
  setUserError(null);

  // Build the search query
  let query = `${searching.username}`;
  if (searching.location) {
    query += ` location:${searching.location}`;
  }
  if (searching.minRepos) {
    query += ` repos:>=${searching.minRepos}`;
  }

  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(query)}&page=${page}&per_page=10`
    );
    const items = response.data.items || [];
    const totalCount = response.data.total_count || 0;

    // Fetch details for each user in parallel
    const userDetails = await Promise.all(
      items.map(async (user) => {
        const details = await axios.get(`https://api.github.com/users/${user.login}`);
        return {
          name: details.data.name,
          login: details.data.login,
          avatar_url: details.data.avatar_url,
          html_url: details.data.html_url,
          location: details.data.location,
          public_repos: details.data.public_repos,
        };
      })
    );

    setUsers(userDetails, totalCount);
    setUserLoading(false);
  } catch (error) {
    setUsers([], 0);
    setUserLoading(false);
    setUserError("Looks like we can't find users with the given criteria");
  }
}

export default fetchUserData;
