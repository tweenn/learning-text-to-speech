
import { html } from '../../../helpers/preact';

import 'https://1.www.s81c.com/common/carbon/web-components/tag/latest/select.min.js';

export default ({
	label = '',
	placeholder = '',
	value = '',
	values = [],
	cssClass = '',
	setValue = (newValue) => {
		console.log('Select component default set action executed, please provide me an action', newValue);
	}
}) => {

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	return html`
		<div class="bx--form-item">
			<bx-select label-text="${label}"
				class="${cssClass}"
				placeholder="${placeholder}"
				onBlur="${handleChange}"
			>
				${values.map((selectItem) => {
					if (selectItem.type === 'option') {
						return html`
							<bx-select-item value="${selectItem.value}" selected="${selectItem.value === value}">
								${selectItem.label}
							</bx-select-item>
						`;
					}
				})}
			</bx-select>
		</div>

	`;
};
