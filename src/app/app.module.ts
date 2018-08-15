import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import Components here
import { AppComponent } from './app.component';
import { MapaComponent } from './mapa/mapa.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolboxComponent } from './components/toolbox/toolbox.component';

// Routing module
import {routing} from './app.routing';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    NavbarComponent,
    ToolboxComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
