import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import testData from './db/test_data';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

import * as d3 from 'd3';
import * as d3_tl from 'd3-timelines';

var chart = d3_tl
	.timelines()
	.tickFormat({
		format: d3.timeFormat('%I %p'),
		tickTime: d3.timeHours,
		tickInterval: 1,
		tickSize: 30,
	})
	.display('circle')
	.hover((d, i, datum) => {
		console.log('d: ', d);
		console.log('i: ', i);
		console.log('datum: ', datum);
	});

d3.select('#timeline')
	.append('svg')
	.attr('width', 800)
	.datum(testData)
	.call(chart);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
