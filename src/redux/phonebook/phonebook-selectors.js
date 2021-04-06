import { createSelector } from '@reduxjs/toolkit';

export const getAllContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
export const getError = state => state.contacts.error;

export const getFilteredContacts = createSelector(
    [getAllContacts, getFilter],
    (contacts, filter) => contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()))
);