import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Avaliacao } from '../../models/avaliacao';
import { AvaliacaoService } from '../../services/avaliacao.service';

@Component({
  selector: 'app-avaliacao-card',
  templateUrl: './avaliacao-card.component.html',
  styleUrls: ['./avaliacao-card.component.css']
})
export class AvaliacaoCardComponent implements OnInit, OnDestroy {

  @Input()
  avaliacao: Avaliacao;
  curtidas = {curtiu: false, descurtiu: false};

  constructor(private avaServ: AvaliacaoService) { }

  ngOnInit() {
    const aux = JSON.parse(sessionStorage.getItem(this.avaliacao.id.toString()));
    if (aux) {
      this.curtidas = aux;
    }
  }

  ngOnDestroy(): void {
    sessionStorage.setItem(this.avaliacao.id.toString(), JSON.stringify(this.curtidas));
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

  curtir() {
    console.log('clicou c');
    if (!this.curtidas.curtiu && !this.curtidas.descurtiu) {
      this.avaliacao.curtidas++;
      this.curtidas.curtiu = true;

      this.restCurtir();
    } else if (!this.curtidas.curtiu && this.curtidas.descurtiu) {
      this.avaliacao.curtidas++;
      this.avaliacao.descurtidas--;

      this.curtidas.curtiu = true;
      this.curtidas.descurtiu = false;

      this.restCurtir();
    }
  }

  descurtir() {
    console.log('clicou d');
    if (!this.curtidas.curtiu && !this.curtidas.descurtiu) {
      this.avaliacao.descurtidas++;
      this.curtidas.descurtiu = true;

      this.restDescurtir();
    } else if (this.curtidas.curtiu && !this.curtidas.descurtiu) {
      this.avaliacao.descurtidas++;
      this.avaliacao.curtidas--;

      this.curtidas.descurtiu = true;
      this.curtidas.curtiu = false;

      this.restDescurtir();
    }
  }

  restCurtir() {
    this.avaServ.curtir(this.avaliacao).then((resolve) => {
      this.avaliacao = resolve.data;
    });
  }

  restDescurtir() {
    this.avaServ.descurtir(this.avaliacao).then((resolve) => {
      this.avaliacao = resolve.data;
    });
  }
}
