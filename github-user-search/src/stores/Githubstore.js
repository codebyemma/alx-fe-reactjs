import { create } from 'zustand';

const Githubstore = create((set) => ({
    user: {name: '', img: '', profile: '',},
    searching: '',
    setDetails: (name, img, profile) =>
	set({user: {name, img, profile}}),
    setSearch: (search) => set({searching : search}),
}));

export default Githubstore;
