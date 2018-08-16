import { Component, OnInit } from '@angular/core';
import {GeoCodingService} from '../../services/geo-coding.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  image = 'assets/images/home-world.png';
  cidade = '';

  constructor(private geoServ: GeoCodingService) { }

  ngOnInit() {
    // O angular travou a mudança dinamica da cor do body, fiz essa mudançca via DOM - helisson
    document.body.style.backgroundColor = '#404966';
    this.geoServ.getGeoPosition();
  }

  gotoMaps() {
    this.geoServ.findFromAddress(this.cidade);
  }

}
