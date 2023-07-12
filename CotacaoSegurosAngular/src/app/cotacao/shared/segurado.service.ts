import { Segurado } from './segurado';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeguradoService {

  listaSegurado: Segurado[] = [];

  constructor() { }

  consultarPorCpf(cpf: number){
    return this.listaSegurado.find((value) => value.cpf == cpf);
  }

  salvar(segurado: Segurado){
    const seg = this.consultarPorCpf(segurado.cpf);
    if (seg){
      seg.nome = segurado.nome;
      seg.dataNascimento = segurado.dataNascimento;
    }else{
      this.listaSegurado.push(segurado);
    }
  }
}
