import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const APP_ROUTES: Routes = [
  {path: '', component: AppComponent},
  {path: '**', component: PageNotFoundComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
