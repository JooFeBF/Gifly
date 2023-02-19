import { useReducer } from "react"

const useForm = () =>{  
    const initialState = {
        keyword: localStorage.getItem('lastSearch') || '',
        rating: localStorage.getItem('lastRating') || 'g',
        language: localStorage.getItem('lastLanguage') || 'en'
    }
    const ACTIONS = {
        SET_KEYWORD: 'SET_KEYWORD',
        SET_RATING: 'SET_RATING',
        SET_LANGUAGE: 'SET_LANGUAGE'
    }
    const reducer = (state, action)=>{
        switch(action.type){
            case ACTIONS.SET_KEYWORD:
                return {...state, keyword: action.payload};
            case ACTIONS.SET_RATING:
                return {...state, rating: action.payload};
            case ACTIONS.SET_LANGUAGE:
                return {...state, language: action.payload};
            default:
                return state;
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState);
    const setKeyword = (keyword)=>{
        dispatch({type: ACTIONS.SET_KEYWORD, payload: keyword});
    }
    const setRating = (rating)=>{
        dispatch({type: ACTIONS.SET_RATING, payload: rating});
    }
    const setLanguage = (language)=>{
        dispatch({type: ACTIONS.SET_LANGUAGE, payload: language});
    }
    const keyword = state.keyword;
    const rating = state.rating;
    const language = state.language;
    return {setKeyword, setRating, setLanguage, keyword, rating, language};
}
export default useForm;