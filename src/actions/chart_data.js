import { mockResponse } from '../db/event_data.js';

const events = mockResponse.events;

const chartData = [];
for (let i = 0; i < events.length; i++) {
	const eventTime = events[i].timestamp;

	const times = [
		{
			starting_time: eventTime,
			ending_time: eventTime,
		},
	];

	chartData.push({ times });
}

export default chartData;
