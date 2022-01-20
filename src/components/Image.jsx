import React, { useContext } from "react"
import { Context } from "../Context/ContextProvider"
import useHover from "../hooks/useHover"

function CustomImage({ className, img }) {
    const [isHoverd, ref] = useHover()
    const { toggleFavorite, addCartItem, cartItems, removeFromCart } = useContext(Context)

    function heartIcon() {
        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
        } else if (isHoverd) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
        }
    }

    function cartIcon() {
        const alreadyInCart = cartItems.some(item => item.id === img.id)
        if (alreadyInCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeFromCart(img.id)}></i>
        } else if (isHoverd) {
            return <i className="ri-add-circle-line cart" onClick={() => addCartItem(img)}></i>
        }
    }


    return (
        <div className={`${className} image-container`} ref={ref}>
            {< img src={img.url} className="image-grid" alt="" />}
            {heartIcon()}
            {cartIcon()}
        </div >
    )
}

export default CustomImage
