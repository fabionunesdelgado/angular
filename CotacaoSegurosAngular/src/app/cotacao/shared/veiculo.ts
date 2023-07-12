import { Modelo } from "./modelo";

export class Veiculo {
  chassi: String;
  placa: String;
  modelo: Modelo;
  anoFabricacao: number;
  anoModelo: number;

  constructor(){
    this.modelo = new Modelo;
  }
}
