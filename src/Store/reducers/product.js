
import { Notify } from '../../Util/NotificationProvider';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const SET_WISHLIST = 'SET_WISHLIST';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_CART_QUANTITY = 'INCREASE_CART_QUANTITY';
export const DECREASE_CART_QUANTITY = 'DECREASE_CART_QUANTITY';
export const PLACE_ORDER = 'PLACE_ORDER';

export const setWishlist = id => ({ type: SET_WISHLIST, payLoad: id });

export const addToCart = id => ({ type: ADD_TO_CART, payLoad: id });

export const removeFromCart = id => ({ type: REMOVE_FROM_CART, payLoad: id });

export const increaseCartQuantity = id => ({ type: INCREASE_CART_QUANTITY, payLoad: id });

export const decreaseCartQuantity = id => ({ type: DECREASE_CART_QUANTITY, payLoad: id });

export const placeOrder = id => ({ type: PLACE_ORDER });

const productReducers = (state = [], action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return state;
        case SET_WISHLIST:
            return state.map(
                product => product.id === action.payLoad
                    ? { ...product, wishlisted: !product.wishlisted }
                    : product
            );
        case ADD_TO_CART:
            return state.map(
                product => product.id === action.payLoad
                    ? { ...product, carted: true, quantity: 1 }
                    : product
            );
        case REMOVE_FROM_CART:
            return state.map(
                product => product.id === action.payLoad
                    ? { ...product, carted: false, quantity: 0 }
                    : product
            );
        case INCREASE_CART_QUANTITY:
            return state.map(
                product => product.id === action.payLoad
                    ? { ...product, quantity: product.quantity + 1 }
                    : product
            );
        case DECREASE_CART_QUANTITY:
            return state.map(
                product => product.id === action.payLoad
                    ? { ...product, quantity: product.quantity - 1 }
                    : product
            );
        case PLACE_ORDER:
            Notify("Order Placed Successfully", "success");
            return state.map(product => ({ ...product, carted: false }));
        default:
            return state;
    }

}

export default productReducers;