import CONSTANTS from '../constants';
import {
    API_GET_CO2_VALUE_PENDING,
    API_GET_CO2_VALUE_FULFILLED,
    API_GET_CO2_VALUE_REJECTED
} from './types';

import ApiRequestHandler from "../handlers/ApiRequestHandler";

let apiRequestHandler = new ApiRequestHandler();

const Pending = (type) => {
    return {type}
};

const Response = (type, payload,) => {
    return {type, payload}
};


export const _onApiGetCo2Value = () => {
    return function (dispatch) {
        dispatch(Pending(API_GET_CO2_VALUE_PENDING));
        apiRequestHandler.apiGetCo2Value().then(response => {
            dispatch(Response(API_GET_CO2_VALUE_FULFILLED, response));
            console.log("API_GET_CO2_VALUE_FULFILLED", response)
        }).catch(function (error) {
            dispatch(Response(API_GET_CO2_VALUE_REJECTED, error));
            console.log("API_GET_CO2_VALUE_REJECTED", error)
        });
    }
};
