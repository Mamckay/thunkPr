import {SET_TEST_LOADING, SET_TEST, SET_TEST_ERROR} from '../actions/test';

const initialState = {
    test: 'false',
    loading: false,
    error: null
}

export default testReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_TEST_LOADING:
            return Object.assign({}, state,{
                loading: true,
                error:null
            })
        case SET_TEST: 
            return Object.assign({}, state,{
                test: action.test,
                loading: false,
                error:null
            })
        case SET_TEST_ERROR:
            return Object.assign({}, state,{
                loading: false,
                error: action.error
            })

        default:
            return state;
    }
}