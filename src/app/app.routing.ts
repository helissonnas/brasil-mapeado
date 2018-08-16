import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {MapaComponent} from './pages/mapa/mapa.component';
import {HomeComponent} from './pages/home/home.component';
import {SobreComponent} from './pages/sobre/sobre.component';
import {DadosComponent} from './pages/dados/dados.component';

const APP_ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'dados', component: DadosComponent},
  {path: 'mapa/:lat/:lng', component: MapaComponent},
  {path: '**', component: PageNotFoundComponent}

];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
