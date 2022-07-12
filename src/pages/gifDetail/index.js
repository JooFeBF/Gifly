import { Link } from "wouter";
import useSingleGif from "hooks/useSingleGif";
import { Helmet } from "react-helmet";
import { Redirect } from "wouter";

const GifDetail = ({params}) =>{
    const {gif, loading, error} = useSingleGif({id: params.id})
    if (loading) return <h2>loading</h2>;
    if (error) return <Redirect to='/404'></Redirect>;
    if (!gif) return null;

        return <div>
            <Helmet>
                <title>{`${gif.title} | Gifly`}</title>
            </Helmet>
        <Link to='/' className='home-link'>Gif Search</Link>
        <h1>{gif.title}</h1>
        <img src={gif.url} alt={gif.title} />
        </div>
    
}
export default GifDetail;