import axios from 'axios'
import { toastr } from "react-redux-toastr"
import { reset as resetForm, initialize } from "redux-form";
import {showTabs, selectTab} from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:3000/api'

const INITIAL_VALUES = {}


export function getList(){
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type:'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return function teste(dispatch) {
        axios.post(`${BASE_URL}/billingCycles`, values)
        .then(() => {
            toastr.success('Sucesso','Operação Realizada com sucesso')
            dispatch(init())
            
        })
        .catch((e) => {
            e.response.data.errors.forEach(error => {
                toastr.error('Erro',error)
            })
        })        
    }   
    
}

export function showUpdate(billingCycle){
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm',billingCycle)
    ]
}

export function init(){
    return [
        showTabs('tabList','tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm',INITIAL_VALUES)

    ]
}