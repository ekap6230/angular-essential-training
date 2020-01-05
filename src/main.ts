// here we are simply telling the engine how to start the application
// we are targetiing the broweser platform

import {platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppModule} from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule);
