import axios from "axios";
import { baseUrl } from "../../UrlHelper/baseUrl";
import { ADD_TO_CART, REMOVE_FROM_CART, SAVE_SHIPPING_DETAILS } from "../Constants/cartConstants";
import { toast } from "react-toastify";


// ADD TO CART 
export const AddToCart = (id, quantity,productSize) => async (dispatch, getState) => {
    const { data } = await axios.get(`${baseUrl}/product/${id}`)

    dispatch({
        type: ADD_TO_CART,
        payload: {
            productId: data.getProduct._id,
            name: data.getProduct.name,
            price: data.getProduct.price,
            stock: data.getProduct.Stock,
            images: data.getProduct.images[0],
            category: data.getProduct.category,
            quantity,
            productSize,
        }
    })
    localStorage.setItem("cartItems", JSON.stringify(getState().cartData.cartItems))
}

// REMOVE FROM CART 
export const RemoveFromCart = (id, productSize) => async (dispatch, getState) => {
    const cartItems = getState().cartData.cartItems;
    const updatedCartItems = cartItems.filter(item => !(item.productId === id && item.productSize === productSize));
     // console.log("remove",productSize,updatedCartItems)
    dispatch({
        type: REMOVE_FROM_CART,
        payload: { id, productSize }, 
    });

    toast.success("Product Removed Successfully!!");
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
};


// SAVING SHIPPING DETAILS 
export const SaveShippingInfo = (data) => async (dispatch, getState) => {
    dispatch({
        type: SAVE_SHIPPING_DETAILS,
        payload: data
    })
    toast.success("Shipping Details Saved Successfully!!");
    localStorage.setItem("shippingInfo", JSON.stringify(data))
}