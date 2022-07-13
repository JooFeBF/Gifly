import React from 'react';
import { useLocation } from 'wouter';
import useForm from 'hooks/useForm';
const RATING_OPTIONS = ['g', 'pg', 'pg-13', 'r'];

const Searcher = ()=>{
    const [, setPath] = useLocation();
    
    const {keyword, rating, setKeyword, setRating} = useForm()

    const handleSubmit = (e) => {
        e.preventDefault();
        setPath(`/search/${keyword}/${rating}`);
    }
    const handleKeywordChange = (e) =>{
        setKeyword(e.target.value);
    }
    const handleRatingChange = (e) =>{
        setRating(e.target.value);
    }
    return(
          <form onSubmit={handleSubmit} className={"searcher-box"}>
            <input type="text" onChange={handleKeywordChange} className={"searcher"} placeholder={"Search here your gif..."}/>
            <button className='searchIcon'>
                <img src={require('../searchIcon.png')} alt="search"/>
            </button>
            <select onChange={handleRatingChange} className={"rating"}>
                {RATING_OPTIONS.map(option => <option key={option} value={option}>{option}</option>)}
            </select>
          </form>
    )
}

export default React.memo(Searcher);