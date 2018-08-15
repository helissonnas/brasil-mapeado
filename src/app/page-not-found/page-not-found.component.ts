import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  image = 'assets/images/astro404.png';
  constructor() { }

  ngOnInit() {
    // O angular travou a mudança dinamica da cor do body, fiz essa mudançca via DOM - helisson
    document.body.style.backgroundColor = '#181b20';
  }

  voltar() {
    window.history.back();
  }

}
