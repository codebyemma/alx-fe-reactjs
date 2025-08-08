import { create } from 'zustand';

const Githubstore = create((set) => ({
    user: {name: '', img: '', profile: '', loading: '', error: ''},
    searching: '',
    setDetails: (name, img, profile, loading, error) =>
        set({user: {name, img, profile, loading, error}}),
    setSearch: (search) => set({searching : search}),
}));

export default Githubstore;
