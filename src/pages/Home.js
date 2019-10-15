import React from "react";
import ApiRequestHandler from "../handlers/ApiRequestHandler";
import {ScatterChart, Scatter, XAxis, YAxis, ZAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setInterval(() => {
            this.props.actions._onApiGetCo2Value();
        }, 10000)
    }

    render() {
        const {moderateDataSource, fineDataSource, severeDataSource} = this.props.state;
        return (
            <div>
                <ScatterChart width={1000} height={400} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
                    <CartesianGrid stroke="#ccc" strokeDasharray="2 2"/>
                    <XAxis tick={{fontSize: 15}} type="number" dataKey={'time'} name='stature' unit='sec'/>
                    <YAxis tick={{fontSize: 15}} type="number" domain={[0, 5000]} dataKey={'co2Value'} unit='ppm'/>
                    <ZAxis range={[100]}/>
                    <Tooltip cursor={{strokeDasharray: '1 1'}}/>
                    <Legend/>
                    <Scatter name='Fine' data={fineDataSource} fill='#228B22' line={{stroke: '#228B22', strokeWidth: 1}}
                             shape="dot"/>
                    <Scatter name='Moderate' data={moderateDataSource} fill='#FFFF66'
                             line={{stroke: '#FFFF66', strokeWidth: 1}} shape="dot"/>
                    <Scatter name='Severe' data={severeDataSource} fill='#B22222'
                             line={{stroke: '#B22222', strokeWidth: 1}} shape="dot"/>
                </ScatterChart>
            </div>
        );
    }
}


export default HomePage;