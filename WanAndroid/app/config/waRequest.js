/**
 * waRequest.js
 * 网络请求
 *
 * */
import { createAction } from 'redux-actions';
import  * as homeTypes from '../constants/homeTypes'
import HttpUtil from '../config/waHttp'

function getHome(num) {
    return dispatch =>{
        dispatch(createAction(homeTypes.FETCH_HOME_LIST_DOING)())
        let result = HttpUtil.get('/article/list/'+num+'/json')
            .then(res=>dispatch(createAction(homeTypes.FETCH_HOME_LIST_DONE)(res.data)))
            .catch(e=>dispatch(createAction(homeTypes.FETCH_HOME_LIST_ERROR)(e)))
    }
}


export {
    getHome
}