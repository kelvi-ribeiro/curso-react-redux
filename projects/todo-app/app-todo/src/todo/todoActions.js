import axios from 'axios'

const URL = 'http://localhost:3000/api/todos'

export const changeDescription = event => {
    return dispatch => {
        dispatch({type:'DESCRIPTION_CHANGED',payload:event.target.value})
        dispatch(search(event.target.value))
        
    }
}

export const search = (description) => {    
    let search = ''
    if(description){
        search = `&description__regex=/${description }/`
    }
    
    const request = axios.get(`${URL}?sort=-createdAt${search}`)
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

export const  remove = (id) => {
    return dispatch => {
        axios.delete(`${URL}/${id}`)
        .then(() => dispatch(search()))
    }
}




