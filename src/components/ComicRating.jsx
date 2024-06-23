import PropTypes from 'prop-types';

import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

export function ComicRating({ actualComic }) {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    useEffect(() => {
        setRating(null);
    }, [actualComic]);

    return (
        <div className="comicrating_container">
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
                            size={35}
                            color={currentRating <= (hover || rating) ? '#323030' : '#e9e9e9'}
                            onMouseEnter={() => setHover(currentRating)}
                            onMouseLeave={() => setHover(null)}
                        />
                    </label>
                );
            })}
            {rating && <p>Tu calificación es de {rating}</p>}
        </div>
    );
}

ComicRating.propTypes = {
    actualComic: PropTypes.object.isRequired,
};
