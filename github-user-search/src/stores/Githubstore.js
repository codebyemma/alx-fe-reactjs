import { create } from 'zustand';

const Githubstore = create((set) => ({
    searching: '',
    setSearch: (search) => set({searching : search})
}));

export default Githubstore;