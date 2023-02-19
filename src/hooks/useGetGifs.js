import { useState, useEffect, useContext } from "react";
import getGif from "services/getGif";
import Context  from "context/gifContext";

const initialPage = 0;
const ReturnGif = (keyword, rating, language)=>{
    const { gifs, setGifs } = useContext(Context)
    const [page, setPage] = useState(initialPage);
    const [loading, setLoading] = useState(false);
    const [loadingNextPage, setLoadingNextPage] = useState(false);

    const keywordToUse = keyword || localStorage.getItem('lastSearch') || '';
    const ratingToUse = rating || localStorage.getItem('lastRating') || 'g';
    const languageToUse = language || localStorage.getItem('lastLanguage') || 'en';
    
    useEffect(() => {
      setLoading(true);
      getGif(keywordToUse, initialPage, ratingToUse, languageToUse)
        .then(gifs => {
          setGifs(gifs)
          setLoading(false)
          localStorage.setItem('lastSearch', keywordToUse)
          localStorage.setItem('lastRating', ratingToUse)
          localStorage.setItem('lastLanguage', languageToUse)
        });
    }, [keyword, setGifs, keywordToUse, rating, language, ratingToUse, languageToUse]);

    useEffect(() => {
      if (page === initialPage) return

      setLoadingNextPage(true);

      getGif(keywordToUse, page, ratingToUse, languageToUse)
      .then(gifs => {
        setGifs(prevGifs => prevGifs.concat(gifs))
        setLoadingNextPage(false)
      });
    }, [page, keyword, setGifs, keywordToUse, rating, ratingToUse, language, languageToUse]);
    return({gifs, loading, setPage, loadingNextPage});
}

export default ReturnGif;

