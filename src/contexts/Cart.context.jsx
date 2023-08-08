import { createContext, useReducer } from "react";

let INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    cartCount: 0,
    cartTotal: 0,
};
const cartLocalStorage = localStorage.getItem('cart')

if (cartLocalStorage) {
    const cart = JSON.parse(localStorage.getItem('cart'))
    
    INITIAL_STATE = {
        isCartOpen: false,
        ...cart
    }
}

export const CartContext = createContext({
    ...INITIAL_STATE,
    setIsCartOpen: () => { },
    addToCart: () => { },
    deleteItem: () => { },
    reduceQt: () => { },
})


export const CART_ACTION_TYPES = {
    SET_CART_ITEMS: "SET_CART_ITEMS",
    SET_CART_OPEN: "SET_CART_OPEN"
}


export const cartReducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.SET_CART_OPEN:
            return {
                ...state,
                ...payload
            }
        default:
            throw new Error(`unhandled type ${type} in userReducer`)
    }

}


const addCartItem = (cartItems, item) => {
    console.log(cartItems)
    const exists = cartItems.find(
        (cartItem) => cartItem.id === item.id
    );

    if (exists) {
        return cartItems.map(
            (cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...item, quantity: 1 }]
}


const removeCartItem = (cartItems, item) => {

    const exists = cartItems.find(
        (cartItem) => cartItem.id === item.id
    );
    if (exists.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== item.id)
    }
    return cartItems.map(
        (cartItem) => cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
    )

}



export const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)

    const { cartItems, isCartOpen, cartCount, cartTotal } = state

    const updateCartReducer = (newCartItems) => {

        const newCartCount = newCartItems.reduce((total, item) => total + item.quantity, 0)
        const newCartTotal = newCartItems.reduce((total, item) => total + item.price * item.quantity, 0)
        const cart = {
            cartItems: newCartItems,
            cartTotal: newCartTotal,
            cartCount: newCartCount
        }
        localStorage.setItem('cart', JSON.stringify(cart))

        dispatch({
            type: CART_ACTION_TYPES.SET_CART_ITEMS,
            payload: {
                ...cart
            }

        })
    }

    const setIsCartOpen = (bool) => {
        dispatch({
            type: CART_ACTION_TYPES.SET_CART_OPEN,
            payload: {
                isCartOpen: bool
            }
        })
    }

    const addToCart = (item) => {
        const newCart = addCartItem(cartItems, item)
        updateCartReducer(newCart)
    }

    const reduceQt = (cartItem) => {
        const newCart = removeCartItem(cartItems, cartItem)
        updateCartReducer(newCart)
    }

    const deleteItem = (cartItem) => {
        const newCart = cartItems.filter((item) => item.id !== cartItem.id)
        updateCartReducer(newCart)
    }




    const value = {
        setIsCartOpen,
        addToCart,
        reduceQt,
        deleteItem,
        isCartOpen,
        cartItems,
        cartCount,
        cartTotal
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}