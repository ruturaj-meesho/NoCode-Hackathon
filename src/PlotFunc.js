import React, { useRef } from 'react';
import { Table } from 'antd';
import GraphPlot from './GraphPlot';

export default function PlotFunc({scatterx, scattery}) {


    const messagesEndRef = useRef(null);
          
    return(
        <div>
            <GraphPlot scatterx={scatterx} scattery={scattery}/>
        </div>
    )


}