import { Marca } from './marca';

export class Modelo {
  id: number;
  descricao: String;
  marca: Marca;

  constructor(){
    this.marca = new Marca;
  }
}
