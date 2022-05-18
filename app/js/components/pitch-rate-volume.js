
import { html } from '../helpers/preact';

import Slider from './carbon/forms/slider';

import { useStore } from '../store';

export default () => {

	const [pitch, setPitch] = useStore.pitch();
	const [rate, setRate] = useStore.rate();
	const [volume, setVolume] = useStore.volume();

	return html`
		<${Slider}
			label="Pitch"
			setValue="${setPitch}"
			value="${pitch}"
			min="${0}"
			max="${2}"
			step="${0.1}"
			withInput="${true}"
			cssClass="${'full-width'}"
		/>
		<${Slider}
			label="Rate"
			setValue="${setRate}"
			value="${rate}"
			min="${0}"
			max="${10}"
			step="${0.25}"
			withInput="${true}"
			cssClass="${'full-width'}"
		/>
		<${Slider}
			label="Volume"
			setValue="${setVolume}"
			value="${volume}"
			min="${0}"
			max="${1}"
			step="${0.1}"
			withInput="${true}"
			cssClass="${'full-width'}"
		/>
	`;
};
