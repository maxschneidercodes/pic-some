import React, { useContext, useState } from "react"
import { Context } from "../Context/ContextProvider"
import CartItem from "../components/CartItem"

function Cart() {
    const { cartItems, emptyCart } = useContext(Context)
    const totalCost = 5.99 * cartItems.length
    const totalCostDisplay = totalCost.toLocaleString("en-US", { style: "currency", currency: "USD" })
    const [buttonText, setButtonText] = useState("Place Order")
    const [orderSucess, setOrderSucess] = useState(false)
    const cartItemElements = cartItems.map(item => {
        return <div key={item.id} className="tall-image-container">
            <CartItem key={item.id} item={item} />
        </div>
    })

    function placeOrder() {
        if (cartItems.length !== 0) {
            setButtonText("Ordering...")
            setTimeout(() => {
                setButtonText("Sucess")
                setOrderSucess(true)
                emptyCart()
            }, 3000)
        }
    }

    return (
        <main className="container cart-page">
            {cartItemElements}

            <p className="total-cost">Total: {totalCostDisplay}</p>
            {cartItems.length > 0 ? <div>
                <div className="order-button">
                    <button onClick={() => placeOrder()}>{buttonText}</button>
                </div>
            </div> :
                <div>
                    <p>You have no items in your cart.</p>
                </div>
            }
            {orderSucess && <div>
                <h1> Succes Ordering </h1>
            </div>}
        </main>
    )
}

export default Cart