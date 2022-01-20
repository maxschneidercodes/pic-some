import { useState, useEffect } from "react"

const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

function useToggle(defaultValue = []) {
    const [allPhotos, setAllPhotos] = useState([])
    console.log(defaultValue)
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAllPhotos(data)
            })
    }, [])

    function toggleFavorite(id) {
        console.log(id)
        const updatedArr = allPhotos.map(photo => {
            if (photo.id === id) {
                console.log(id)
                console.log(!photo.isFavorite)
                return { ...photo, isFavorite: !photo.isFavorite }
            }
            return photo
        })

        setAllPhotos(updatedArr)
    }

    return [allPhotos, setAllPhotos, toggleFavorite]
}

export default useToggle