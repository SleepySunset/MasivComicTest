import PropTypes from 'prop-types';

export function ComicButtons({ actualComic, lastComic, setComicId }) {
    const prevComic = () => {
        actualComic.num !== 1 ? setComicId(actualComic.num - 1) : null;
    };

    const nextComic = () => {
        actualComic.num !== lastComic.num ? setComicId(actualComic.num + 1) : null;
    };
    const randomComic = () => {
        setComicId(Math.floor(Math.random() * (lastComic.num - 1 + 1)) + 1);
    };

    return (
        <div className="comicbutton_container">
            <button onClick={prevComic} disabled={actualComic.num === 1}>
                Prev
            </button>
            <button onClick={randomComic}>Random</button>
            <button onClick={nextComic} disabled={actualComic.num === lastComic.num}>
                Next
            </button>
        </div>
    );
}

ComicButtons.propTypes = {
    actualComic: PropTypes.object.isRequired,
    lastComic: PropTypes.object.isRequired,
    setComicId: PropTypes.func.isRequired,
};
