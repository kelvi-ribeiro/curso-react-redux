import axios from 'axios'

const URL = 'http://localhost:3000/api/todos'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    const request = axios.get(`${URL}?sort=-createdAt`)    
    return {
        type:'TODO_SEARCHED',
        payload:request
    }
}


export const add = (description) => {
    return dispatch => {
        axios.post(URL,{ description })
        .then(() => dispatch({type:'TODO_ADDED'}))
        .then(() => dispatch(search()))        
    }
}

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`,{...todo, done:true})
        .then(() => dispatch({type:'TODO_MARKED_AS_DONE'}))
        .then(() => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`,{...todo, done:false})
        .then(() => dispatch({type:'TODO_MARKED_AS_PENDING'}))
        .then(() => dispatch(search()))
    }
}




