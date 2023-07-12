import { CotacaoService } from './../shared/cotacao.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Cotacao } from './../shared/cotacao';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seguro-segurado',
  templateUrl: './seguro-segurado.component.html',
  styleUrls: ['./seguro-segurado.component.css']
})
export class SeguroSeguradoComponent implements OnInit {
  formSeguroSegurado: FormGroup;
  router: Router;

  constructor(private cotacaoService: CotacaoService, router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
    this.createForm(new Cotacao());
  }

  createForm(cotacao: Cotacao): void {
    this.formSeguroSegurado = new FormGroup({
      cpf: new FormControl(cotacao.segurado.cpf),
      nome: new FormControl(cotacao.segurado.nome),
      dataNascimento: new FormControl(cotacao.segurado.dataNascimento),
      tipoSeguro: new FormControl(cotacao.tipoSeguro),
      tipoVigencia: new FormControl(cotacao.tipoVigencia),
      iniVigencia: new FormControl(cotacao.iniVigencia),
      fimVigencia: new FormControl(cotacao.fimVigencia),
      id: new FormControl(cotacao.id)
    })
  }

  onSubmit() {
    const numCotacao = this.cotacaoService.salvar(this.formSeguroSegurado.value);
    this.router.navigate(['veiculo/'+numCotacao]);
  }
}
