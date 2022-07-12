import React, { useState } from 'react';
import { useLocation} from 'wouter';

const Searcher = ()=>{
    const [keyword, setKeyword] = useState('');
    const [, setPath] = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();
        setKeyword(keyword || 'random');
        setPath(`/search/${keyword}`);
    }
    const handleChange = (e) =>{
        setKeyword(e.target.value);
    }
    return(
          <form onSubmit={handleSubmit} className={"searcher-box"}>
            <input type="text" onChange={handleChange} className={"searcher"} placeholder={"Search here your gif..."}/>
            <button className='searchIcon'>
                <img src={require('../searchIcon.png')} alt="search"/>
            </button>
          </form>
    )
}

export default React.memo(Searcher);