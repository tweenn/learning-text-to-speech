
import { html } from '../../../helpers/preact';

import 'https://1.www.s81c.com/common/carbon/web-components/tag/latest/slider.min.js';

export default ({
	name = '',
	value = '',
	label = '',
	min = 0,
	max = 100,
	step = 1,
	cssClass = '',
	withInput = false,
	setValue = (newValue) => {
		console.log('Slider component default set action executed, please provide me an action', newValue);
	}
}) => {

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return html`
		<div class="bx--form-item">
			<bx-slider
				class="${cssClass}"
				name="${name}"
				label-text="${label}"
				max="${max}"
				min="${min}"
				step="${step}"
				value="${value}"
				onblur=${handleChange}
			>
				${withInput && html`
					<bx-slider-input
						aria-label="${value}"
						type="number"
						onblur=${handleChange}
					></bx-slider-input>
				`}
			</bx-slider>
		</div>

	`;
};
