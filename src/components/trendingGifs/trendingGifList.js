import { Link } from "wouter";
import { useEffect, useState} from "react";
import getTrendingGifs from "services/getTrendingGifs";

const TrendingGifs = () => {
    const [gifList, setGifList] = useState([]);

    useEffect(() => {
        getTrendingGifs().then(setGifList);
    }, []);

    const lastRatingOption = localStorage.getItem('lastRating') || 'g';
    const lastLanguageOption = localStorage.getItem('lastLanguage' || 'en');

    return (
        <div className="trending-data">
            <h1>Trending Gifs</h1>
            <ul className="trending-data__ul">
                {
                    gifList.map(gif => <li key={gif}><Link to={`/search/${gif}/${lastRatingOption}/${lastLanguageOption}`} className="trending-data__ul-li-a">{gif}</Link></li>)
                }
            </ul>
        </div>
    )
}

export default TrendingGifs;
