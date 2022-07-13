import { Link } from "wouter";
import { useEffect, useState} from "react";
import getGifTrendings from "services/getGifTrendings";

const TrendingGifs = () => {
    const [gifList, setGifList] = useState([]);
    useEffect(() => {
        getGifTrendings().then(setGifList);
    }, []);
    return (
        <div className="trending-data">
            <h1>Trending Gifs</h1>
            <ul className="trending-data__ul">
                {
                    gifList.map(gif => <li key={gif}><Link to={`/search/${gif}/g`} className="trending-data__ul-li-a">{gif}</Link></li>)
                }
            </ul>
        </div>
    )
}

export default TrendingGifs;
