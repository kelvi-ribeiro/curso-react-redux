export function changeValue(e){
    console.log(e.target.value)
    return {
        type:'VALUE_CHANGED',
        payload:e.target.value
    }
}