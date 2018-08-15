import { Component, OnInit } from '@angular/core';
import {GeoCodingService} from '../services/geo-coding.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  positionFornecida = true;
  image = 'assets/images/home-world.png';

  constructor(private geoServ: GeoCodingService) { }

  ngOnInit() {
    // O angular travou a mudança dinamica da cor do body, fiz essa mudançca via DOM - helisson
    document.body.style.backgroundColor = '#404966';

    if (this.geoServ.getGeoPosition()) {

    } else {
      this.positionFornecida = false;
    }
  }

}
