import React, { Component } from 'react';
import './App.css';
// import chartData from './db/test_data';
import chartData from './actions/chart_data';

import * as d3 from 'd3';
import * as d3_tl from 'd3-timelines';

window.d3_tl = d3_tl;

var chart = d3_tl
	.timelines()
	// .width(850 * 4)
	.margin({ left: 120, right: 30, top: 0, bottom: 0 })
	.stack()
	.showTimeAxisTick()
	.tickFormat({
		format: d3.timeFormat('%x%X'),
		tickTime: d3.timeMinutes,
		tickInterval: 5,
		tickSize: 10,
	})
	.rotateTicks(45)
	.display('circle')
	.click((d, i, datum) => {
		console.log('d: ', d);
		console.log('i: ', i);
		console.log('datum: ', datum);
	});

class App extends Component {
	render() {
		d3.select('#root')
			.append('svg')
			.attr('width', 1500)
			.attr('height', 200)
			.datum(chartData)
			.call(chart);

		return null;
	}
}

export default App;
