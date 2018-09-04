import { Component, OnInit, Input } from '@angular/core';
import { Avaliacao } from '../../models/avaliacao';

@Component({
  selector: 'app-avaliacao-card',
  templateUrl: './avaliacao-card.component.html',
  styleUrls: ['./avaliacao-card.component.css']
})
export class AvaliacaoCardComponent implements OnInit {

  @Input()
  avaliacao: Avaliacao;

  constructor() { }

  ngOnInit() {
  }

  analisaDesempenho(valor) {
    if (valor > this.avaliacao.avaliacao) {
      return 'fa fa-star-o';
    }

    return 'fa fa-star';
  }

  dataFormatada() {
    const data = new Date(this.avaliacao.data);
    let dia = data.getDate().toString();
    if (dia.toString().length === 1) {
       dia = '0' + dia;
    }

    const aux = data.getMonth() + 1;
    let mes = aux.toString();
    if (mes.toString().length === 1) {
      mes = '0' + mes;
    }
    const ano = data.getFullYear();
    return dia + '/' + mes + '/' + ano;
  }
}
