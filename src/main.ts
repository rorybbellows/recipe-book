import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { RecipeBookAppComponent, environment } from './app/';
import { ShoppingListService } from './app/shopping-list';

if (environment.production) {
  enableProdMode();
}

bootstrap(RecipeBookAppComponent, [ShoppingListService]);
