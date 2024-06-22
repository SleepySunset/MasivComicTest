import PropTypes from 'prop-types';

export function ComicImage({ actualComic }) {
    return (
      <div>
        <h1>
          {actualComic.num}-{actualComic.title}
        </h1>
        <img src={actualComic.img}></img>
      </div>
    );
  }
  
ComicImage.propTypes= {
    actualComic: PropTypes.object.isRequired
}