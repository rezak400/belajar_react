import { createStore, combineReducers } from "redux"

//! Menginisiasi state , state ini bisa dibuat banyak nantinya
//! State Global
const initialStateGlobal = {
    //! ini main URL, GANTI URL DISINI    
    URL_API : `http://192.168.0.17:4000`,

    //? INI CUMAN FYI AJA, JGN GANTI2, AMBIL AJA
    URL_CONFIG : `http://192.168.0.17:4000`,
    URL_LOCAL : `http://localhost:4000`,
    URL_SERVER : `https://mern-blog-reza.herokuapp.com`
}

const GlobalReducer = (state = initialStateGlobal, action) => {
    if(action.type === `UPDATE_URL`){
        return{
            ...state,
            URL_API : action.payload
        }
    }

    return state
}

//! StateHome
const initialStateHome = {
    dataBlog : []
}

const HomeReducer = (state = initialStateHome, action) => {
    if(action.type === `UPDATE_BLOG`){
        return{
            ...state,
            dataBlog: action.payload
        }
    }
    return state
}


//! reducer ini yg menampung semua reducer dari "redux"
const reducer = combineReducers({HomeReducer,GlobalReducer})
//! diserahkan ke store agar dipakai
const GLOBAL_STORE = createStore(reducer)

export default GLOBAL_STORE