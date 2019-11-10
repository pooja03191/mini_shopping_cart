import { FETCH_USERS_PENDING, FETCH_USERS_SUCCESS,
    FETCH_USERS_ERROR, FETCH_USER_PENDING,
    FETCH_USER_SUCCESS, FETCH_USER_ERROR } from '../actions/Users/usersActions'
import { initialState } from './initialState'

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                pending: false,
                users: action.payload
            }
        case FETCH_USERS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        case FETCH_USER_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                pending: false,
                user: action.payload
            }
        case FETCH_USER_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state 
    }
}

export const getUsers = state => state.users
export const getUser = state => state.user
export const getUsersPending = state => state.pending
export const getUsersError = state => state.error