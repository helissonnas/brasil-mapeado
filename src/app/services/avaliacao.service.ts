import { Injectable } from '@angular/core';
import { RestService } from './rest.service';

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
}
