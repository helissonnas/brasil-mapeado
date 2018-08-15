import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapaComponent } from './mapa/mapa.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolboxComponent } from './components/toolbox/toolbox.component';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    NavbarComponent,
    ToolboxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
