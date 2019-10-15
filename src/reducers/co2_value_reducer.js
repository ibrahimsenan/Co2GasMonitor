// getting co2 value Reducer

import {
    API_GET_CO2_VALUE_PENDING,
    API_GET_CO2_VALUE_FULFILLED,
    API_GET_CO2_VALUE_REJECTED,
} from '../actoins/types';

const initialState = {
    apiGetCo2Value: {
        fetching: false,
        fetched: false,
        error: null,
        data: {},
    },
    startedTime: 0,
    fineDataSource: [],
    moderateDataSource: [],
    severeDataSource: [],
};

const reducer = (state = initialState, action) => {

    switch (action.type) {

        // API Get  Co2 Value from Backend
        case API_GET_CO2_VALUE_PENDING: {
            console.log("API_GET_CO2_VALUE_PENDING");
            return {
                ...state,
                apiGetCo2Value: {...state.apiGetCo2Value, fetching: true, fetched: false, error: null},
            }
        }
        case API_GET_CO2_VALUE_FULFILLED: {
            console.log("API_GET_CO2_VALUE_FULFILLED");
            state.startedTime = state.startedTime + 10;
            if (action.payload.co2Value <= 1000) {
                state.fineDataSource.push({
                    time: state.startedTime, co2Value: action.payload.co2Value
                });

            } else if (action.payload.co2Value > 1000 && action.payload.co2Value <= 2000) {
                state.moderateDataSource.push({
                    time: state.startedTime, co2Value: action.payload.co2Value
                });

            } else {
                state.severeDataSource.push({
                    time: state.startedTime, co2Value: action.payload.co2Value
                });
            }
            return {
                ...state,
                apiGetCo2Value: {
                    ...state.apiGetCo2Value,
                    fetching: false,
                    fetched: true,
                    error: null,
                    data: action.payload
                },
                fineDataSource: state.fineDataSource,
                moderateDataSource: state.moderateDataSource,
                severeDataSource: state.severeDataSource
            }
        }
        case API_GET_CO2_VALUE_REJECTED: {
            console.log("API_GET_CO2_VALUE_REJECTED");
            return {...state, apiGetCo2Value: {...state.apiGetCo2Value, fetching: false, error: action.payload}}
        }


        default:
            return state
    }
};

export default reducer;