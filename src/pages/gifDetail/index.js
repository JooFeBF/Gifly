import "./styles.css";
import { Link } from "wouter";
import useSingleGif from "hooks/useSingleGif";
import { Helmet } from "react-helmet";
import { Redirect } from "wouter";
import Searcher from "components/searcher";
const GifDetail = ({params}) =>{
    const {gif, loading, error} = useSingleGif({id: params.id})
    if (loading) return <h2>loading</h2>;
    if (error) return <Redirect to='/404'></Redirect>;
    if (!gif) return null;

    return <>
            <Link to='/' className='home-link'>Gifly</Link>
            <Searcher></Searcher>
            <div className="detail-container">
                <Helmet>
                    <title>{`${gif.title} | Gifly`}</title>
                </Helmet>
                <h1 className="gif-title">{gif.title}</h1>
                <img className="detail-img" src={gif.url} alt={gif.title} />
            </div>
        </> 
    
}
export default GifDetail;