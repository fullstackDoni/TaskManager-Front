import {ApplicationConfig} from '@angular/core';
import {provideRouter, PreloadAllModules, withPreloading} from '@angular/router';
import {routes} from './app.routes';
import {HttpClient, HttpClientModule, provideHttpClient, withFetch} from "@angular/common/http";
import {provideAnimations} from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(
      routes,
      withPreloading(PreloadAllModules),
    ),
    provideHttpClient(withFetch())
  ]
};
