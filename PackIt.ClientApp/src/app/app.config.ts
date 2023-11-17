import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { packingListReducer } from './store/packinglist.reducer';
import { provideEffects } from '@ngrx/effects';
import { PackingListEffects } from './store/packinglist.effects';
import { provideHttpClient } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideStore({ packingList: packingListReducer }),
    provideEffects([PackingListEffects]),
    provideHttpClient(),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
    }),
  ],
};
