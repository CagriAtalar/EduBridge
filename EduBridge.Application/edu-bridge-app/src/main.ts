import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; // Import your root module


platformBrowserDynamic().bootstrapModule(AppModule) // Bootstrap your root module
  .catch(err => console.error(err));
