import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeoCodingService {

  private _latitude;
  private _longitude;

  constructor() { }

  getGeoPosition() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;

          return true;
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

          return false;
        }
      );
    }
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
