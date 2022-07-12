import React from "react";
import { Link } from "wouter";

const ListOfGifs = ({title, id, url}) => {
    return (
        <div className="gif-container" style={{"backgroundImage": `url(${url})`}}>
            <Link to={`/gif/${id}`} className="gif-content">
                <h4>{decodeURI(title)}</h4>
                <small>gif id: {id}</small>
            </Link>
        </div>
    )
}

export default React.memo(ListOfGifs);