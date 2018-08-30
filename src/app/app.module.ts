import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Import Components here
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolboxComponent } from './components/toolbox/toolbox.component';
import { FooterComponent } from './components/footer/footer.component';
import {FormsModule} from '@angular/forms';

// Import pages here
import { MapaComponent } from './pages/mapa/mapa.component';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { DadosComponent } from './pages/dados/dados.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

// Routing module
import {routing} from './app.routing';
import {GeoCodingService} from './services/geo-coding.service';
import { AvaliacaoService } from './services/avaliacao.service';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent,
    NavbarComponent,
    ToolboxComponent,
    PageNotFoundComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    DadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    GeoCodingService,
    AvaliacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
