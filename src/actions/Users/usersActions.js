// ACTION CONSTANTS FOR FETCHING USERS LIST
export const FETCH_USERS_PENDING = 'FETCH_USERS_PENDING'
export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
export const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'

//ACTION CONSTANTS FOR INDIVIDUAL USERS
export const FETCH_USER_PENDING = 'FETCH_PRODUCT_PENDING'
export const FETCH_USER_SUCCESS = 'FETCH_PRODUCT_SUCCESS'
export const FETCH_USER_ERROR = 'FETCH_PRODUCT_ERROR'

export const fetchUsersPending = () => {
    return {
        type: FETCH_USERS_PENDING
    }
}

export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersError = (error) => {
    return {
        type: FETCH_USERS_ERROR,
        payload: error
    }
}

export const fetchUserPending = () => {
    return { 
        type: FETCH_USER_PENDING 
    }
}

export const fetchUserSuccess = (user) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: user
    }
}

export const fetchUserError = (error) => {
    return { 
        type: FETCH_USER_ERROR,
        payload: error
    }
}