export const selectContacts = state => {
  if (state === undefined) {
    return;
  }
  return state.contacts.contacts;
};

export const selectFilter = state => {
  if (state === undefined) {
    return;
  }
  return state.contacts.filter;
};

export const selectLoading = state => {
  return state.contacts.isLoading;
};
