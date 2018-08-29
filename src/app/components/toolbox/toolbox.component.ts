import { Component, OnInit, Input } from '@angular/core';
import { GeoCodingService } from '../../services/geo-coding.service';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {

  constructor(private mapaServ: GeoCodingService) { }

  ngOnInit() {
  }

}
