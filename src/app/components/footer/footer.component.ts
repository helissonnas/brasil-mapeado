import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  imagelsi = 'assets/images/lsi-icon.png';
  imageufcg = 'assets/images/ufcg-icon.png';

  constructor() { }

  ngOnInit() {
  }

}
