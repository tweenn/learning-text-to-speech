
import { html, useState } from '../helpers/preact';

import CarbonButton from './carbon/button';
import IconPlay from './carbon/icons/play';
import IconPause from './carbon/icons/pause';
import IconStop from './carbon/icons/stop';

import { useStore } from '../store';

export default () => {
	const [isPlaying, setIsPlaying] = useState(false);

	const [voices] = useStore.voice.list();
	const [currentVoice] = useStore.voice.selected();
	const [text] = useStore.text();
	const [pitch] = useStore.pitch();
	const [rate] = useStore.rate();
	const [volume] = useStore.volume();

	const onclickPlayPause = () => {
		if (!window.speechSynthesis.speaking) {
			makeItPlay();
		} else {
			speechSynthPlayPause();
		}

		setIsPlaying(!isPlaying);
	}

	const speechSynthPlayPause = () => {
		if (speechSynthesis.paused) {
			speechSynthesis.resume();
		} else {
			speechSynthesis.pause();
		}
	};

	const speechSynthStop = () => {
		window.speechSynthesis.cancel();
	};

	const makeItPlay = () => {
		console.table(voices[currentVoice])
		console.table({
			text,
			pitch,
			rate,
			volume
		});


		const utterance = new window.SpeechSynthesisUtterance(text);
		utterance.voice = voices[currentVoice];
		utterance.pitch = pitch;
		utterance.rate = rate;
		utterance.volume = volume;

		[
			'end',
			'error',
			'pause',
		].forEach((event) => {
			utterance.addEventListener(event, function () {
				console.log('Utterance event:', event);
				setIsPlaying(false);
			});
		});

		[
			'start',
			'resume',
		].forEach((event) => {
			utterance.addEventListener(event, function () {
				console.log('Utterance event:', event);
				setIsPlaying(true);
			});
		});

		window.speechSynthesis.speak(utterance);
	}

	const buttonText = () => {
		if (isPlaying) {
			return IconPause;
		}
		return IconPlay;
	}

	return html`
		<${CarbonButton}
			icon="${true}"
			text="${buttonText()}"
			onClick="${onclickPlayPause}"
		/>
		<${CarbonButton}
			cssClass="${'ml-2'}"
			icon="${true}"
			text="${IconStop}"
			onClick="${speechSynthStop}"
		/>
	`;
};
