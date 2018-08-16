import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import axios from 'axios';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class GeoCodingService {

  private _latitude;
  private _longitude;
  REGULAR: string;
  REVERSE: string;

  constructor(private router: Router) {
    const api = environment.api.mapsApi;

    this.REGULAR = api + 'address=';
    this.REVERSE = api + 'language=pt-BR&latlng=';
  }

  findFromAddress(address: string, postalCode?: string, place?: string, province?:
    string, region?: string, country?: string) {

    const compositeAddress = [address];

    const url = `${this.REGULAR}${compositeAddress.join(',')}`;

    axios.get(url).then((response) => {
      this.latitude  = response.data.results[0].geometry.location.lat;
      this.longitude = response.data.results[0].geometry.location.lng;

      this.gotoMapa();
    });
  }

  getGeoPosition() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;

          console.log(this.latitude, this.longitude);
          this.gotoMapa();
        },
        error => {
          switch (error.code) {
            case 1:
              console.log('Permissão Negada');
              break;
            case 2:
              console.log('Posição Indisponível');
              break;
            case 3:
              console.log('Timeout');
              break;
          }
        }
      );
    }
  }

  gotoMapa() {
    console.log('entrou');
    this.router.navigate(['/mapa', this.latitude, this.longitude]);
  }

  get latitude() {
    return this._latitude;
  }

  set latitude(value) {
    this._latitude = value;
  }

  get longitude() {
    return this._longitude;
  }

  set longitude(value) {
    this._longitude = value;
  }
}
