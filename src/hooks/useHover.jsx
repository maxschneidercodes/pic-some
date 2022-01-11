import { useState, useEffect, useRef } from "react"

function useHover() {
    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)

    function enter() {
        setHovered(true)
    }

    function leave() {
        setHovered(false)
    }

    useEffect(() => {
        const refference = ref
        if (refference.current) {
            refference.current.addEventListener("mouseenter", enter)
            refference.current.addEventListener("mouseleave", leave)
        }
        return () => {
            if (refference.current) {
                refference.current.addEventListener("mouseenter", enter)
                refference.current.addEventListener("mouseleave", leave)
            }
        }
    }, [])

    return [hovered, ref]
}

export default useHover