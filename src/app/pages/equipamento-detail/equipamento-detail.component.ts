import { Component, OnInit, OnDestroy } from '@angular/core';
import { AvaliacaoService } from '../../services/avaliacao.service';
import { Avaliacao } from '../../models/avaliacao';

@Component({
  selector: 'app-equipamento-detail',
  templateUrl: './equipamento-detail.component.html',
  styleUrls: ['./equipamento-detail.component.css']
})
export class EquipamentoDetailComponent implements OnInit, OnDestroy {

  equip;
  avaliacoes: Avaliacao[];

  constructor(private avaServ: AvaliacaoService) {
    // O angular travou a mudança dinamica da cor do body, fiz essa mudançca via DOM - helisson
    document.body.style.backgroundColor = '#f6f1ec';
   }

  ngOnInit() {
    this.equip = JSON.parse(window.localStorage.getItem('equipamento'));
    if (!this.equip) { window.history.back(); }

    this.avaServ.getAllByServico(this.equip.id).then((response) => {
      this.avaliacoes = response.data;
    });
  }

  ngOnDestroy(): void {
    window.localStorage.clear();
  }

  back() {
    window.history.back();
  }
}
