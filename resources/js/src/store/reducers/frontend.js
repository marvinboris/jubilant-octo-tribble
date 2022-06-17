import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {};

const pages = [
    'home', 'about', 'contact', 'publications', 'services',
];

pages.forEach(page => {
    initialState[page] = {
        loading: false,
        error: null
    }
});

const reset = (root, state) => updateObject(state, { [root]: initialState[root] });
const start = (root, state) => updateObject(state, { [root]: updateObject(state[root], { loading: true, message: null }) });
const success = (root, state, action) => updateObject(state, { [root]: updateObject(state[root], { loading: false, error: null, ...action }) });
const fail = (root, state, action) => updateObject(state, { [root]: updateObject(state[root], { loading: false, ...action }) });

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.HOME_RESET: return reset('home', state);
        case actionTypes.HOME_START: return start('home', state);
        case actionTypes.HOME_SUCCESS: return success('home', state, action);
        case actionTypes.HOME_FAIL: return fail('home', state, action);

        case actionTypes.ABOUT_RESET: return reset('about', state);
        case actionTypes.ABOUT_START: return start('about', state);
        case actionTypes.ABOUT_SUCCESS: return success('about', state, action);
        case actionTypes.ABOUT_FAIL: return fail('about', state, action);

        case actionTypes.CONTACT_RESET: return reset('contact', state);
        case actionTypes.CONTACT_START: return start('contact', state);
        case actionTypes.CONTACT_SUCCESS: return success('contact', state, action);
        case actionTypes.CONTACT_FAIL: return fail('contact', state, action);

        case actionTypes.PUBLICATIONS_RESET: return reset('publications', state);
        case actionTypes.PUBLICATIONS_START: return start('publications', state);
        case actionTypes.PUBLICATIONS_SUCCESS: return success('publications', state, action);
        case actionTypes.PUBLICATIONS_FAIL: return fail('publications', state, action);

        case actionTypes.SERVICES_RESET: return reset('services', state);
        case actionTypes.SERVICES_START: return start('services', state);
        case actionTypes.SERVICES_SUCCESS: return success('services', state, action);
        case actionTypes.SERVICES_FAIL: return fail('services', state, action);

        default: return state;
    }
};