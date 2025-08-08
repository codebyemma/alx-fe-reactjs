import { useEffect, useState } from "react";
import axios from "axios";
import Githubstore from "../stores/Githubstore";

function fetchUserData() {
  const search = Githubstore(state => state.searching); // ✅ correct key
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null); // Default to null
  const setDetails = Githubstore((state) => state.setDetails);

  useEffect(() => {
    if (!search) return; // Do nothing if search is empty

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.github.com/users/${search}`);
        setData(response.data);
	setDetails(data.name, data.avatar_url, data.html_url)
        setError(null);
      } catch (err) {
        setError("Looks like we can't find the user");
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [search]);
};

export default fetchUserData;
