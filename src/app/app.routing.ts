import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {MapaComponent} from './mapa/mapa.component';
import {HomeComponent} from './home/home.component';

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mapa/:cidade', component: MapaComponent},
  {path: '**', component: PageNotFoundComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
