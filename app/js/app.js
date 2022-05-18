
import { html } from './helpers/preact';

import UiShell from './components/carbon/ui-shell';

import Voices from './components/voices';
import TextToRead from './components/text-to-read';
import PitchRateVolume from './components/pitch-rate-volume';
import PlayPause from './components/play-pause';

export default () => {

	const colClasses = `
		bx--col-md-4 bx--offset-md-2
		bx--col-lg-6 bx--offset-lg-3
		bx--col-xlg-6 bx--offset-xlg-3
		bx--col-max-6 bx--offset-max-3
	`;

	return html`
		<div class="App">
			<header>
				<${UiShell} />
			</header>
			<main>
				<div class="bx--grid">
					<div class="bx--row">
						<div class="bx--col ${colClasses}">
							<h3>
								Learning Text 2 Speech
							</h3>
						</div>
					</div>
					<div class="bx--row pt-2">
						<div class="bx--col ${colClasses}">
							<${TextToRead} />
						</div>
					</div>
					<div class="bx--row pt-2">
						<div class="bx--col ${colClasses}">
							<${PitchRateVolume} />
						</div>
					</div>
					<div class="bx--row pt-2">
						<div class="bx--col ${colClasses}">
							<${Voices} />
						</div>
					</div>

					<div class="bx--row pt-2">
						<div class="bx--col ${colClasses}">
							<${PlayPause} />
						</div>
					</div>
				</div>
			</main>
		</div>
	`;
};
