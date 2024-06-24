import PropTypes from 'prop-types';

export function ComicImage({ actualComic }) {
    return (
        <div className="comicimage_container">
            <h1>{actualComic.num} - {actualComic.title}</h1>
            <img src={actualComic.img} alt={actualComic.title} />
        </div>
    );
}

ComicImage.propTypes = {
    actualComic: PropTypes.object.isRequired,
};
