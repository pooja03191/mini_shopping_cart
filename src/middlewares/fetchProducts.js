import axios from 'axios'
import { 
    fetchProductsPending, fetchProductsSuccess, fetchProductsError,
    fetchProductPending, fetchProductSuccess, fetchProductError
 } from '../actions/Products/productsActions'

 export const fetchProducts = () => {
    //return dispatch => {
        //dispatch(fetchProductsPending())
        axios.get("https://myshoppingcart-e6d9f.firebaseio.com/Products.json")
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    //}
 }
 export const fetchProduct = (id) => {
    //return dispatch => {
        //dispatch(fetchProductsPending())
        axios.get("https://myshoppingcart-e6d9f.firebaseio.com/Products.json/" + id)
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    //}
 }