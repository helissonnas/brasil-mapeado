import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  image = 'assets/images/icon_logo.png';
  esconde = false;
  private innerWidth: number;


  constructor() { }

  ngOnInit() {
    if  (window.screen.width < 600) {
      this.esconde = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;

    if  (this.innerWidth < 600) {
      this.esconde = true;
    }
  }
}
