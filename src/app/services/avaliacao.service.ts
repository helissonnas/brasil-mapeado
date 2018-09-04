import { Injectable } from '@angular/core';
import { RestService } from './rest.service';
import { Avaliacao } from '../models/avaliacao';

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService extends RestService {

  constructor() {
    super('avaliacao');
   }

   getAllByServico(id) {
     return super.get('servico', id);
   }

   curtir(avaliacao: Avaliacao) {
     return super.get(`servico/${avaliacao.id}`, 'curtir');
   }

   descurtir(avaliacao: Avaliacao) {
     return super.get(`servico/${avaliacao.id}`, 'descurtir');
   }
}
