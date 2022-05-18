
import createStore from '../vendor/teaful';

const initialStore = {
	voice: {
		list: [],
		selected: ''
	},
	text: 'Learning Text to Speech',
	pitch: 1,
	rate: 1,
	volume: 1
};

export const { useStore } = createStore(initialStore);
