const INITTIAL_STATE = { description: '', list: [] }


export default (state = INITTIAL_STATE, action) => {
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return {...state, description:action.payload}

        case 'TODO_SEARCHED':
            return {...state, list:action.payload.data}
        default:
            return state
    }
}