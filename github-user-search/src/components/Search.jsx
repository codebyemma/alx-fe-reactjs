import Githubstore from "../stores/Githubstore"
import { useState } from "react"

const Search = () => {
    const setsearch = Githubstore(state => state.setSearch);
    const [search, setsearching] = useState('');

    const handleChange = (e) => {
        setsearching(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setsearch(search);
    }
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
        </div>
    )
};

export default Search;