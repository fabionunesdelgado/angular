import { Cobertura } from './cobertura';
import { Segurado } from './segurado';
import { Veiculo } from './veiculo';
import { Perfil } from './perfil';

export class Cotacao {
  id: number;
  segurado: Segurado;
  tipoSeguro: number;
  tipoVigencia: number;
  iniVigencia: Date;
  fimVigencia: Date;
  veiculo: Veiculo;
  perfil: Perfil;
  coberturas: Cobertura[];

  constructor(){
    this.segurado = new Segurado();
    this.veiculo = new Veiculo();
    this.perfil = new Perfil();
    this.coberturas = [];
  }

}
