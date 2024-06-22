import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './ComicRating.css';

export function ComicRating( {actualComic} ) {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);
    
    useEffect(() => {
        setRating(null)
    }, [actualComic])


    return (
        <div>
            {[...Array(5)].map((star, index) => {
                const currentRating = index + 1;
                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            value={currentRating}
                            onClick={() => setRating(currentRating)}
                        />
                        <FaStar
                            className="star"
                            size={40}
                            color={currentRating <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
            <p>Tu calificación es de {rating}</p>
        </div>
    );
}


ComicRating.propTypes = {
    actualComic: PropTypes.object.isRequired,
} 
