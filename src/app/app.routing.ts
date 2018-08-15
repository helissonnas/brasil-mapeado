import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AppComponent} from './app.component';

const APP_ROUTES: Routes = [
  {path: '', component: AppComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
