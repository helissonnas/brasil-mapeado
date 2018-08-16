import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // O angular travou a mudança dinamica da cor do body, fiz essa mudançca via DOM - helisson
    document.body.style.backgroundColor = '#f6f1ec';
  }

}
