import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { selectContacts } from "./selectors";
import { selectNameFilter } from "../filters/selectors";
import { logOut } from "../auth/operations";

export const initialContact = {
    contacts: {
      items: [],
      loading: false,
      error: null,
    },
  };
  
  const handlePending = (state) => {
    state.contacts.loading = true;
  };
  
  const handleFetchFulfilled = (state, action) => {
    state.contacts.loading = false;
    state.contacts.error = null;
    state.contacts.items = action.payload;
  };
  
  const handleAddFulfilled = (state, action) => {
    state.contacts.loading = false;
    state.contacts.error = null;
    state.contacts.items.push(action.payload);
  };
  
  const handleDeleteFulfilled = (state, action) => {
    state.contacts.loading = false;
    state.contacts.error = null;
    state.contacts.items = state.contacts.items.filter(
      (contact) => contact.id !== action.payload
    );
  };
  
  const handleRejected = (state, action) => {
    state.contacts.loading = false;
    state.contacts.error = action.payload;
  };
  
  const contactsSlice = createSlice({
    name: "contacts",
    initialState: initialContact,
    extraReducers: (builder) => {
      builder
        .addCase(fetchContacts.pending, handlePending)
        .addCase(fetchContacts.fulfilled, handleFetchFulfilled)
        .addCase(fetchContacts.rejected, handleRejected)
        .addCase(addContact.pending, handlePending)
        .addCase(addContact.fulfilled, handleAddFulfilled)
        .addCase(addContact.rejected, handleRejected)
        .addCase(deleteContact.pending, handlePending)
        .addCase(deleteContact.fulfilled, handleDeleteFulfilled)
        .addCase(deleteContact.rejected, handleRejected)
        .addCase(logOut.fulfilled, () => {
            return initialContact;
          });
      },
    });
  
  
  export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filter) => {
        return contacts.items.filter(
            (contact) =>
              contact.name.toLowerCase().includes(filter.toLowerCase()) ||
              contact.number.toLowerCase().includes(filter.toLowerCase())
          );
        }
      );
  
      export default contactsSlice.reducer;