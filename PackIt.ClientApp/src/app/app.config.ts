import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { packingListReducer } from './store/packinglist/packinglist.reducer';
import { provideEffects } from '@ngrx/effects';
import { PackingListEffects } from './store/packinglist/packinglist.effects';
import { provideHttpClient } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { tabReducer } from './store/tab/tab.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideStore({ packingList: packingListReducer, tabs: tabReducer }),
    provideEffects([PackingListEffects]),
    provideHttpClient(),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
    }),
  ],
};
