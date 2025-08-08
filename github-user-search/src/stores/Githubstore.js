import { create } from 'zustand';

const Githubstore = create((set) => ({
    users: [],
    userLoading: false,
    userError: null,
    searching: {},
    page: 1,
    totalCount: 0,
    setSearch: (search) => set({ searching: search, page: 1 }),
    setUsers: (users, totalCount) => set({ users, totalCount }),
    setUserLoading: (loading) => set({ userLoading: loading }),
    setUserError: (error) => set({ userError: error }),
    setPage: (page) => set({ page }),
}));

export default Githubstore;
