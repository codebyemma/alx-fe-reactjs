import Githubstore from "../stores/Githubstore";
import { useState, useEffect } from "react";
import fetchUserData from "../services/githubService";

const Search = () => {
    const setsearch = Githubstore(state => state.setSearch);
    const users = Githubstore(state => state.users);
    const userLoading = Githubstore(state => state.userLoading);
    const userError = Githubstore(state => state.userError);
    const searchValue = Githubstore(state => state.searching);
    const page = Githubstore(state => state.page);
    const totalCount = Githubstore(state => state.totalCount);
    const setPage = Githubstore(state => state.setPage);

    const [search, setsearching] = useState('');
    const [location, setLocation] = useState('');
    const [minRepos, setMinRepos] = useState('');

    useEffect(() => {
        fetchUserData();
    }, [searchValue, page]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setsearch({ username: search, location, minRepos });
    };

    const handleLoadMore = () => {
        setPage(page + 1);
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
            <form className="space-y-4" onSubmit={handleSubmit} aria-label="GitHub Advanced Search">
                <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                        Username
                    </label>
                    <input
                        id="username"
                        type="text"
                        value={search}
                        onChange={e => setsearching(e.target.value)}
                        placeholder="GitHub username"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                        required
                        aria-required="true"
                    />
                </div>
                <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                        Location
                    </label>
                    <input
                        id="location"
                        type="text"
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                        placeholder="Location"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>
                <div>
                    <label htmlFor="minRepos" className="block text-sm font-medium text-gray-700">
                        Minimum Repositories
                    </label>
                    <input
                        id="minRepos"
                        type="number"
                        min="0"
                        value={minRepos}
                        onChange={e => setMinRepos(e.target.value)}
                        placeholder="e.g. 10"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Search
                </button>
            </form>
            <div className="mt-6">
                {userLoading && <div className="text-blue-600">Loading...</div>}
                {userError && <div className="text-red-600">{userError}</div>}
                {users.length > 0 && (
                    <ul className="space-y-4">
                        {users.map(user => (
                            <li key={user.login} className="flex items-center space-x-4 p-4 border rounded-md">
                                <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
                                <div>
                                    <h3 className="text-lg font-bold">{user.name || user.login}</h3>
                                    <p className="text-sm text-gray-600">Location: {user.location || "N/A"}</p>
                                    <p className="text-sm text-gray-600">Repos: {user.public_repos}</p>
                                    <a
                                        href={user.html_url}
                                        className="text-blue-500 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub Profile
                                    </a>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                {users.length > 0 && users.length < totalCount && (
                    <button
                        onClick={handleLoadMore}
                        className="mt-4 w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400"
                    >
                        Load More
                    </button>
                )}
            </div>
        </div>
    );
};

export default Search;