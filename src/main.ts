import './polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';



fetch('/appsettings.json').then(async (data) => {
	const { production, apiUrl } = await data.json();

	if (production) {
		enableProdMode();
	}

	AppModule.apiUrl = apiUrl;

	platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
		if (window['ngRef']) {
			window['ngRef'].destroy();
		}
		window['ngRef'] = ref;
	}).catch(err => console.error(err));
});
