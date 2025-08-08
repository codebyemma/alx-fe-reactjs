import Githubstore from "../stores/Githubstore";
import { useState, useEffect } from "react";
import fetchUserData from "../services/githubService";

const Search = () => {
    const setsearch = Githubstore(state => state.setSearch);
    const user = Githubstore(state => state.user);
    const searchValue = Githubstore(state => state.searching);
    const setDetails = Githubstore(state => state.setDetails);
    const [search, setsearching] = useState('');

    useEffect(() => {
        fetchUserData();
    }, [searchValue, setDetails]);

    const handleChange = (e) => {
        setsearching(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setsearch(search);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={search}
                    placeholder="search"
                    onChange={handleChange} />
                <button type="submit">Submit</button>
            </form>
            {user.loading && <div>Loading...</div>}
            {user.error && <div>{user.error}</div>}
            {user.name && (
                <div>
                    <img src={user.img} alt="profile image"/>
                    <h2>{user.name || "no name"}</h2>
                    <a href={user.profile}>github link</a>
                </div>
            )}
        </div>
    );
};

export default Search;