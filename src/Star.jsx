import { useEffect, useRef } from "react"

const Star = ({ id, position, destroyStar }) => {
    //creating reference for star
    const starRef = useRef();
    //whenever the star is hovered it will focus it
    useEffect(() => {
        if (starRef.current) {
            starRef.current.focus();
        }
    }, [])
    //sends the id up to the destroy star function in the space component
    const handleClick = () => {
        destroyStar(id);
    }
    //return a star 
    return (
        <div
            ref={starRef}
            tabIndex="0"
            className="star"
            style={{ left: position.x, top: position.y }}
            onClick={handleClick}
        >
            &#9733;
        </div >
    )
}

export default Star