import { useState, useEffect, useContext } from "react";
import getGif from "services/getGif";
import Context  from "context/gifContext";

const initialPage = 0;
const ReturnGif = (keyword)=>{
    const { gifs, setGifs } = useContext(Context)
    const [page, setPage] = useState(initialPage);
    const [loading, setLoading] = useState(false);
    const keywordToUse = keyword || localStorage.getItem('lastSearch') || null;
    useEffect(() => {
      setLoading(true);
      getGif(keywordToUse, initialPage)
        .then(gifs => {
          setGifs(gifs)
          setLoading(false)
          localStorage.setItem('lastSearch', keywordToUse)
        });
    }, [keyword, setGifs, keywordToUse]);

    useEffect(() => {
      if (page === initialPage) return
      getGif(keywordToUse, page)
      .then(gifs => {
        setGifs(prevGifs => prevGifs.concat(gifs))
        setLoading(false)
      });
    }, [page, keyword, setGifs, keywordToUse]);
    return({gifs, loading, setPage});
}

export default ReturnGif;

