import { useState, useEffect, useContext } from "react";
import Context from "context/gifContext";
import getGifByID from "services/getGifByID";

const useSingleGif = ({id}) => {
    const { gifs } = useContext(Context);
    const gifFromCache = gifs.find(gif => gif.id === id);
    const [gif, setGif] = useState(gifFromCache);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if(!gif) getGifByID({id}, setLoading(true)).then(gif => {
            setLoading(false);
            setGif(gif)
        }).catch(err => {
            setError(true) 
            setLoading(false)
        })
    }, [id, gif])
    return {gif, loading, error};
}
export default useSingleGif;