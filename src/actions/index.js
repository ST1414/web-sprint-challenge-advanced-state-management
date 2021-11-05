import axios from 'axios';

// ----- Action Constants -----
export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_ERROR = 'FETCH_ERROR';
export const ADD_SMURF = 'POST_SMURF';
export const SET_ERROR = 'SET_ERROR';


// ----- Thunk Actions -----
export const fetchSmurfs = () => {
    
    return (dispatch) => {
        dispatch(fetchStart());
        axios.get('http://localhost:3333/smurfs')
            .then(response => {
                dispatch(fetchSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchError(error));
            })
    }
}

export const addSmurf = (smurf) => {
    return (dispatch) => {
        axios.post('http://localhost:3333/smurfs', smurf)
            .then( response => {
                dispatch({type: ADD_SMURF, payload: smurf})
            })
            .catch( error => {
                console.log('Add Smurf Error: ', error)
            })
    }
}


// ----- Action Creators -----
const fetchStart = () => {
    return ( {type: FETCH_START} )
}
const fetchSuccess = (smurfs) => {
    return ( {type: FETCH_SUCCESS, payload: smurfs} )
}
const fetchError = (error) => {
    return ( {type: FETCH_ERROR, payload: error} )
}
// Made addSmurf a thunk action to keep all API calls here
//
export const setError = (error) => {
    return ({type: SET_ERROR, payload: error})
}


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.