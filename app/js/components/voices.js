
import { html, useEffect } from '../helpers/preact';

import Select from './carbon/forms/select';

import { useStore } from '../store';

export default () => {

	const [voices, setVoices] = useStore.voice.list();
	const [currentVoice, setCurrentVoice] = useStore.voice.selected();

	const searchVoices = () => {
		const foundVoices = window.speechSynthesis.getVoices();
		if (foundVoices.length > 0) {
			setVoices(foundVoices);
			setCurrentVoice(0);
		}
	};

	useEffect(() => {
		searchVoices();
        if (speechSynthesis.onvoiceschanged !== undefined) {
			speechSynthesis.onvoiceschanged = searchVoices;
		}
	}, []);

	return html`
		<${Select}
			label="Voice"
			setValue=${setCurrentVoice}
			value="${currentVoice}"
			values=${
				voices.map((voice, voiceIndex) => {
					return {
						type: 'option',
						label: `[${voice.lang.toLowerCase()}] ${voice.voiceURI}`,
						value: voiceIndex
					}
				})
			}
		/>
	`;
};
