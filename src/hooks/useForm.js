import { useReducer } from "react"

const useForm = () =>{  
    const initialState = {
        keyword: "react",
        rating: "g"
    }
    const ACTIONS = {
        SET_KEYWORD: 'SET_KEYWORD',
        SET_RATING: 'SET_RATING'
    }
    const reducer = (state, action)=>{
        switch(action.type){
            case ACTIONS.SET_KEYWORD:
                return {...state, keyword: action.payload};
            case ACTIONS.SET_RATING:
                return {...state, rating: action.payload};
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
    const keyword = state.keyword;
    const rating = state.rating;
    return {setKeyword, setRating, keyword, rating};
}
export default useForm;