
import { html } from '../../../helpers/preact';

import 'https://1.www.s81c.com/common/carbon/web-components/tag/latest/textarea.min.js';

let timeout;

export default ({
	name = '',
	value = '',
	label = '',
	placeholder = '',
	cssClass = '',
	setValue = (newValue) => {
		console.log(newValue);
	}
}) => {

	const handleChange = (event) => {
		window.clearTimeout(timeout);
		timeout = window.setTimeout(() => {
			setValue(event.target.value);
		}, 500);
	}

	return html`
		<div class="bx--form-item">
			<bx-textarea
				class="${cssClass}"
				placeholder="${placeholder}"
				value=${value}
				name="${name}"
				onInput="${handleChange}"
			>
				<span slot="label-text">${label}</span>
			</bx-textarea>
		</div>
	`;
};
