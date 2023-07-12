import { Cotacao } from './cotacao';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CotacaoService {

  listaCotacao: Cotacao[] = [];

  constructor() { }

  consultarPorId(id: number){
    return this.listaCotacao.find((value) => value.id == id);
  }

  salvar(cotacao: Cotacao){
    if (cotacao.id){
      const cot = this.consultarPorId(cotacao.id);
      cot.iniVigencia = cotacao.iniVigencia;
      cot.fimVigencia = cotacao.fimVigencia;
      cot.tipoSeguro = cotacao.tipoSeguro;
      cot.segurado = cotacao.segurado;
    } else{
      if (this.listaCotacao.length > 0){
        const ultimoId = this.listaCotacao.length;
        cotacao.id = ultimoId + 1;
      } else{
        cotacao.id = 1;
      }
    }
    this.listaCotacao.push(cotacao);
    return cotacao.id;
  }
}
