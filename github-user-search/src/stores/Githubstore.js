import { create } from 'zustand';

const Githubstore = create((set) => ({
    user: {name: '', avatar_url: '', html_url: '', loading: '', error: ''},
    searching: '',
    setDetails: (name, avatar_url, html_url, loading, error) =>
        set({user: {name, avatar_url, html_url, loading, error}}),
    setSearch: (search) => set({searching : search}),
}));

export default Githubstore;
