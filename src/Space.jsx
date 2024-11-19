import { useEffect, useState } from "react";
import Star from "./Star";
import './index.css';

const Space = () => {
    //setting state for the stars
    const [stars, setStars] = useState([]);
    //useEffect to create new stars every 2500 seconds
    useEffect(() => {
        const starInterval = setInterval(() => {
            //create id/key for these stars
            const idMaker = Math.floor(Math.random() * 1000)
            //create positions for the new stars based on screen length/width
            const newStar = {
                id: idMaker,
                x: Math.random() * (window.innerWidth),
                y: Math.random() * (window.innerHeight)
            };
            //spread the old stars into a new array that includes the newly created star
            setStars(prevStars => [...prevStars, newStar]);
        }, 2000);
        return () => clearInterval(starInterval); //cleanup
    }, []);
    //function to get rid of stars on click
    const destroyStar = (id) => {
        //it takes the stars filter and gets rid of the one by creating a new array that takes the old stars and adds any of them whos id 
        //isnt the same as the one passed into the function
        setStars((prevStars) => prevStars.filter(star => star.id !== id));
    };
    //mapping all variables to what they need to be as props
    return (
        <div className='space'>
            {stars.map((star) => (
                <Star
                    key={star.id}
                    id={star.id}
                    position={{ x: star.x, y: star.y }}
                    destroyStar={destroyStar}
                />
            ))}
        </div>
    );
};

export default Space;
