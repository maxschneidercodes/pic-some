import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../Context/ContextProvider"

function Header() {
    const { cartItems } = useContext(Context)
    return (
        <header>
            <h1><Link to="/">Pic Some</Link></h1>
            <h2><Link to="/cart">Zur Kasse {cartItems.length}</Link></h2>
        </header>
    )
}

export default Header
