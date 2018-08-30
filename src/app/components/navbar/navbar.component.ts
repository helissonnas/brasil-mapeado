import {Component, HostListener, OnInit, Input} from '@angular/core';
import { GeoCodingService } from '../../services/geo-coding.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input()
  caixaDePesquisa: boolean;
  image = 'assets/images/icon_logo.png';
  esconde = false;
  cidade;
  private innerWidth: number;


  constructor(private geoServ: GeoCodingService) { }

  ngOnInit() {
    if  (window.screen.width < 600) {
      this.esconde = true;
    }
  }

  codeAdress() {
    this.geoServ.findFromAddress(this.cidade);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;

    if  (this.innerWidth < 600) {
      this.esconde = true;
    }
  }
}
