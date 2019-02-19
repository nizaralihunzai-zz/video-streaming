/**
 *
 * AreaChart
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
  // AreaChart as AC, Area, XAxis, YAxis, CartesianGrid, Tooltip
} from "recharts";

function AreaChart(props) {
  let data = [];
  
  if(props.data && props.data.length > 0){
    for (let d in props.data) {
      // console.log(props.data[d]);
      data.push({
        name: props.data[d].date, 
        "GBP":props.data[d].rates.GBP, 
        "CAD":props.data[d].rates.CAD, 
        "AUD":props.data[d].rates.AUD, 
        "EUR":props.data[d].rates.EUR, 
      });
   }
   
  //  data = data.reverse();
  }
  

  return (
   	<LineChart width={1200} height={400} data={data}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
        <Line type='monotone' dataKey='EUR' stackId="1" stroke='#16a085' fill='#16a085' />
        <Line type='monotone' dataKey='GBP' stackId="1" stroke='#e74c3c' fill='#e74c3c' />
        <Line type='monotone' dataKey='CAD' stackId="1" stroke='#2c3e50' fill='#2c3e50' />
        <Line type='monotone' dataKey='AUD' stackId="1" stroke='#9b59b6' fill='#9b59b6' />
      </LineChart>
  );
}

AreaChart.propTypes = {};

export default AreaChart;
