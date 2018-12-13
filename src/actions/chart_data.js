import { mockResponse } from '../db/event_data.js';

const events = mockResponse.events;

const chartDict = {};

for (let i = 0; i < events.length; i++) {
	const event = events[i];
	const eventVid = event.videoStream;
	const eventTime = event.timestamp;

	if (chartDict[eventVid]) {
		chartDict[eventVid].push({
			starting_time: eventTime,
			ending_time: eventTime,
		});
	} else {
		chartDict[eventVid] = [
			{
				starting_time: eventTime,
				ending_time: eventTime,
			},
		];
	}
}

console.log(chartDict);

const chartData = [];

const chartDictKeys = Object.keys(chartDict);

for (let i = 0; i < chartDictKeys.length; i++) {
	const label = chartDictKeys[i];

	const times = chartDict[label];

	chartData.push({
		label,
		times,
	});
}

export default chartData;
