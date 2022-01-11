import React from "react"
import { Context } from "../Context/ContextProvider"
import { useContext } from "react"
import CustomImage from "../components/Image"

function Photos() {
    const context = useContext(Context)
    const imageElements = context.allPhotos.map((img, i) => {
        return <CustomImage key={img.id} img={img} className={getClass(i)} alt="" />
    })

    function getClass(i) {
        if (i % 5 === 0) {
            return 'big';
        } else if (i % 6 === 0) {
            return 'wide'
        } else if (i % 8 === 0) {
            return "tall"
        }
    }

    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}



export default Photos