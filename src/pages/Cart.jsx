import React, { useContext, useState } from "react"
import { Context } from "../Context/ContextProvider"
import CartItem from "../components/CartItem"

function Cart() {
    const { cartItems, totalCartCost, buyCart, successOrder } = useContext(Context)
    const [buttonText, setButtonText] = useState("Place Order")

    const cartItemElements = cartItems.map(item => {
        return <div key={item.id} className="tall-image-container">
            <CartItem key={item.id} item={item} />
        </div>
    })

    return (
        <main className="container cart-page">
            {cartItemElements}

            <p className="total-cost">Total: {totalCartCost()}</p>
            {cartItems.length > 0 ? <div>
                <div className="order-button">
                    <button onClick={() => buyCart(setButtonText)}>{buttonText}</button>
                </div>
            </div> :
                <div>
                    <p>You have no items in your cart.</p>
                </div>
            }
            {
                successOrder && <div>
                    <h1> Succes Ordering </h1>
                </div>
            }
        </main >
    )
}

export default Cart