import { useState, useEffect } from 'react';
import { ComicButtons } from './ComicButtons';
import { ComicImage } from './ComicImage';
import { ComicRating } from './ComicRating';

export function ComicViewer() {
    const URL = 'https://xkcd.vercel.app/?comic=';

    const [lastComic, setLastComic] = useState({});
    const [actualComic, setActualComic] = useState({});
    const [comicId, setComicId] = useState('latest');

    useEffect(() => {
        fetch(`${URL}latest`)
            .then((res) => res.json())
            .then((data) => setLastComic(data));
    },[])
    
    useEffect(() => {
        fetch(`${URL}${comicId}`)
            .then((res) => res.json())
            .then((data) => {
                setActualComic(data);
            });
    }, [comicId]);



    return (
        <div className='comicviewer-container'>
            <ComicImage actualComic={actualComic}/>
            <ComicButtons lastComic={lastComic} actualComic={actualComic} setComicId={setComicId} />
            <ComicRating actualComic={actualComic}/>
        </div>
    );
}
