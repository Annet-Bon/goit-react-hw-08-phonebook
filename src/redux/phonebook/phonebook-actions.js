import { createAction } from '@reduxjs/toolkit';

export const addContactRequest = createAction('contacts/addContactRequest');
export const addContactSuccess = createAction('contacts/addContactSuccess');
export const addContactError = createAction('contacts/addContactError');

export const deleteContactRequest = createAction('contacts/deleteContactRequest');
export const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
export const deleteContactError = createAction('contacts/deleteContactError');

export const fetchContactRequest = createAction('contacts/fetchRequest');
export const fetchContactSuccess = createAction('contacts/fetchSuccess');
export const fetchContactError = createAction('contacts/fetchError');

export const changeFilter = createAction('contacts/changeFilter');