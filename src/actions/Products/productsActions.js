// ACTION CONSTANTS FOR FETCHING PRODUCTS LIST
export const FETCH_PRODUCTS_PENDING = 'FETCH_PRODUCTS_PENDING'
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS'
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR'

//ACTION CONSTANTS FOR INDIVIDUAL PRODUCTS
export const FETCH_PRODUCT_PENDING = 'FETCH_PRODUCT_PENDING'
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS'
export const FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR'

export const fetchProductsPending = () => {
    return {
        type: FETCH_PRODUCTS_PENDING
    }
}

export const fetchProductsSuccess = (products) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    } 
}

export const fetchProductsError = (error) => {
    return {
        type: FETCH_PRODUCTS_ERROR,
        error: error
    }
    
}

export const fetchProductPending = () => {
    return { 
        type: FETCH_PRODUCT_PENDING 
    }
}

export const fetchProductSuccess = (product) => {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: product
    }
}

export const fetchProductError = (error) => {
    return {
        type: FETCH_PRODUCT_ERROR,
        error: error
    }
}