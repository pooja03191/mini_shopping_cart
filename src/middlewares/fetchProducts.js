import axios from 'axios'
import { 
    fetchProductsPending, fetchProductsSuccess, fetchProductsError,
    fetchProductPending, fetchProductSuccess, fetchProductError
 } from '../actions/Products/productsActions'

 export const fetchProducts = () => {
    return dispatch => {
        dispatch(fetchProductsPending())
        axios.get("https://myshoppingcart-e6d9f.firebaseio.com/Products.json")
        .then(response => response.json())
        .then(response => {
            dispatch(fetchProductsSuccess(response.data))
        })
        .catch(error => {
            dispatch(fetchProductsError(error))
        })
    }
 }
 export const fetchProduct = (id) => {
    return dispatch => {
        dispatch(fetchProductPending())
        axios.get("https://myshoppingcart-e6d9f.firebaseio.com/Products.json/" + id)
        .then(response => {
            console.log(response)
            dispatch(fetchProductSuccess(response.data))
        })
        .catch(error => {
            dispatch(fetchProductError(error))
        })
    }
 }