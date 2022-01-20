import { useState } from "react"

function useCart() {
    const [cartItems, setCartItems] = useState([])
    const [successOrder, setOrderSucess] = useState(false)

    function cartMessage(messageRef = null, msg) {
        if (messageRef !== null) {
            messageRef(msg)
        }
    }

    function buyCart(messageRef = null) {
        cartMessage(messageRef, "Buying...")
        if (isCartEmpty()) {
            setTimeout(() => {
                cartMessage(messageRef, "Success!")
                setOrderSucess(true)
                emptyCart()
            }, 3000)
        }
    }

    function totalCartCost() {
        const totalCost = calcCart()
        return totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" })
    }

    function calcCart() {
        return 5.99 * cartItems.length
    }

    function addCartItem(item) {
        setCartItems(prev => {
            return [...prev, item]
        })
    }

    function removeFromCart(id) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))
    }

    function emptyCart() {
        setCartItems([])
    }

    function isCartEmpty() {
        if (cartItems.length !== 0) {
            return true
        }
        return false
    }

    return [cartItems, addCartItem, removeFromCart, emptyCart, totalCartCost, buyCart, successOrder, cartMessage]
}

export default useCart