import { combineReducers } from "redux";


const rootReducer = combineReducers({
    dashboard: () => ({
        summary:{credit:100, debt:500}
    })
})


export default rootReducer