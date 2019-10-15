import {Switch, Route} from "react-router-dom";
import Home from "../pages/Home";
import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import * as Co2ValuesRequesterActions from "../actoins/get_co2_value_actions";

class Routes extends Component {

    render() {
        const {actions, state} = this.props;
        return (<Home actions={actions} state={state}/>);
    }
}

function mapStateToProps(state) {
    return state;
}

function mapActionsToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign(
            {}, Co2ValuesRequesterActions), dispatch),
    };
}

export default connect(mapStateToProps, mapActionsToProps)(Routes);

