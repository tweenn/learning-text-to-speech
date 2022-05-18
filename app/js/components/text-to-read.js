
import { html } from '../helpers/preact';

import TextArea from './carbon/forms/text-area';

import { useStore } from '../store';

export default () => {

	const [text, setText] = useStore.text();


	return html`
		<${TextArea}
			cssClass="${'full-width'}"
			value="${text}"
			setValue="${setText}"
		/>
	`;
};
