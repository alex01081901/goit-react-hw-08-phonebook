export const getContacts = state => state.contacts;

export const getFilter = state => state.filter;

export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getIsRefreshing = state => state.auth.isRefreshing;

export const getUserName = state => state.auth.user.name;