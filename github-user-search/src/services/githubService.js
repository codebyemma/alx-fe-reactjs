import axios from "axios";
import Githubstore from "../stores/Githubstore";

function fetchUserData() {
  const search = Githubstore.getState().searching;
  const setDetails = Githubstore.getState().setDetails;
  if (!search) return;

  setDetails("", "", "", true, null); // loading true
  axios.get(`https://api.github.com/users/${search}`)
    .then(response => {
      setDetails(
        response.data.name,
        response.data.avatar_url,
        response.data.html_url,
        false,
        null
      );
    })
    .catch(() => {
      setDetails("", "", "", false, "Looks like we can't find the user");
    });
}

export default fetchUserData;
