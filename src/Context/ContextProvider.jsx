import React from "react"
import useCart from "../hooks/useCart"
import useToggle from "../hooks/useToggle"

const Context = React.createContext()

function ContextProvider({ children }) {
    const [allPhotos, setAllPhotos, toggleFavorite] = useToggle()
    const [cartItems, addCartItem, removeFromCart, emptyCart, totalCartCost, buyCart, successOrder] = useCart()

    const providerValues = {
        allPhotos, setAllPhotos, toggleFavorite,
        cartItems, addCartItem, removeFromCart, emptyCart, totalCartCost, buyCart, successOrder,
    }

    return (
        <Context.Provider value={providerValues}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }