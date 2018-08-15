import { Component, OnInit } from '@angular/core';
import {GeoCodingService} from '../services/geo-coding.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor(private geoServ: GeoCodingService) { }

  ngOnInit() {

  }

}
