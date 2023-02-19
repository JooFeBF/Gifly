import React, { useState } from 'react';
import { useLocation } from 'wouter';
import useForm from 'hooks/useForm';
import searchIcon from 'searchIcon.svg';
import filterIcon from 'filterIcon.svg'
const RATING_OPTIONS = ['g', 'pg', 'pg-13', 'r'];
const LANGUAGE_OPTIONS = ['es', 'en', 'pt', 'id', 'fr', 'ar', 'tr', 'th', 'vi', 'de', 'it', 'ja', 'zh-CN', 'zh-TW', 'ru', 'ko', 'pl', 'nl', 'ro', 'hu', 'sv', 'cs', 'hi', 'bn', 'da', 'fa', 'tl', 'fi', 'iw', 'ms', 'no', 'uk']

const Searcher = ()=>{
    const [, setPath] = useLocation();
    const [openFilter, setOpenFilter] = useState(false);
    const {keyword, rating, language, setKeyword, setRating, setLanguage} = useForm()

    const handleClick = () =>{
        setOpenFilter(prevState => !prevState)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(keyword) setPath(`/search/${keyword}/${rating}/${language}`)   
    }
    const handleKeywordChange = (e) =>{
        if(e.target.value) setKeyword(e.target.value);
    }
    const handleRatingChange = (e) =>{
        setRating(e.target.value);
    }
    const handleLanguageChange = (e) =>{
        setLanguage(e.target.value);
    }
    return(
          <form onSubmit={handleSubmit} className={"searcher-box"} style={{'margin': `${openFilter ? '4em' : '0.2em'}`}}>
            <div>
                <div className='searcher-container'>
                    <input type="text" onChange={handleKeywordChange} className={"searcher"} placeholder={"Search here your gif..."} />
                    <button className='searchIcon'>
                        <img src={searchIcon} alt="search"/>
                    </button>
                </div>
                <img src={filterIcon} alt='filter' className='filter-icon' onClick={handleClick}/>
            </div>
                {
                    openFilter ?
                    <section className='filters-section'>
                        <h3>Filters</h3>
                        <div>
                            <div>
                                <label htmlFor="rating">Rating</label>
                                <select onChange={handleRatingChange} className={"rating"} value={rating}>
                                    {RATING_OPTIONS.map(option => <option key={option} value={option}>{option}</option>)}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="language">language</label>
                                <select onChange={handleLanguageChange} className={rating} value={language}>
                                    {LANGUAGE_OPTIONS.map(option => <option key={option} value={option}>{option}</option>)}
                                </select>
                            </div>
                        </div>
                    </section>
                    : null
                }
          </form>
    )
}

export default React.memo(Searcher);