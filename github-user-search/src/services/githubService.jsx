import { useEffect, useState } from "react";
import axios from "axios";
import Githubstore from "../stores/Githubstore";

const FetchUserData = () => {
  const search = Githubstore(state => state.searching); // ✅ correct key
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null); // Default to null

  useEffect(() => {
    if (!search) return; // Do nothing if search is empty

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`https://api.github.com/users/${search}`);
        setData(response.data);
        setError(null);
      } catch (err) {
        setError("Looks like we can't find the user");
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [search]); // ✅ Reactively re-run when `searching` changes

  return (
    <div>
      <h2>Fetched Data</h2>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data && (
        <>
          <img src={data.avatar_url} alt={data.name} width="100" />
          <p>Name: {data.name || "No name provided"}</p>
          <p>GitHub: <a href={data.html_url} target="_blank" rel="noopener noreferrer">{data.html_url}</a></p>
        </>
      )}
    </div>
  );
};

export default FetchUserData;
