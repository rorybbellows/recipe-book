import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { RecipeBookAppComponent, environment } from './app/';
import { ShoppingListService } from './app/shopping-list';
import { APP_ROUTES_PROVIDERS } from './app/app.routes';

import { disableDeprecatedForms, provideForms } from "@angular/forms";

if (environment.production) {
  enableProdMode();
}

bootstrap(RecipeBookAppComponent, [APP_ROUTES_PROVIDERS, ShoppingListService, disableDeprecatedForms(), provideForms()]);
