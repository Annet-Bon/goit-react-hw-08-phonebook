import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
    addContactRequest,
    addContactSuccess,
    addContactError,
    deleteContactRequest,
    deleteContactSuccess,
    deleteContactError,
    fetchContactRequest,
    fetchContactSuccess,
    fetchContactError,
    changeFilter,
} from './phonebook-actions';

const items = createReducer(
    [], {
        [addContactSuccess]: (state, { payload }) => [...state, payload],
        [deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
        [fetchContactSuccess]: (_, { payload }) => payload,
    }
)

const filter = createReducer(
    '', {
        [changeFilter]: (_, { payload }) => payload,
})

const loading = createReducer(
    false, {
        [fetchContactRequest]: () => true,
    [fetchContactSuccess]: () => false,
        [fetchContactError]: () => false,
    [addContactRequest]: () => true,
        [addContactSuccess]: () => false,
    [addContactError]: () => false,
        [deleteContactRequest]: () => true,
    [deleteContactSuccess]: () => false,
        [deleteContactError]: () => false,
})

const error = createReducer(null, {});

export default combineReducers({
    items,
    filter,
    loading,
    error
});