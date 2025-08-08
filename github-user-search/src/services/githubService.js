import { useEffect } from "react";
import axios from "axios";
import Githubstore from "../stores/Githubstore";

// ✅ React component to trigger API call based on store's "search" value
function FetchUserData() {
  const search = Githubstore((state) => state.searching);
  const setDetails = Githubstore((state) => state.setDetails);

  useEffect(() => {
    if (!search) return;

    const fetchData = async () => {
      try {
        setDetails("", "", "", true, null); // loading true
        const response = await axios.get(`https://api.github.com/users/${search}`);
        setDetails(
          response.data.name,
          response.data.avatar_url,
          response.data.html_url,
          false,
          null
        );
      } catch (err) {
        setDetails("", "", "", false, "Looks like we can't find the user");
      }
    };

    fetchData();
  }, [search, setDetails]);

  return null; // No visible output; just handles fetching
}

export default FetchUserData;
