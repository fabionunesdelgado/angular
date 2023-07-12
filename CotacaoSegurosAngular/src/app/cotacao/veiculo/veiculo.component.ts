import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CotacaoService } from './../shared/cotacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veiculo',
  templateUrl: './veiculo.component.html',
  styleUrls: ['./veiculo.component.css']
})
export class VeiculoComponent implements OnInit {

  formVeiculo: FormGroup;
  router: Router;

  constructor(private cotacaoService: CotacaoService, router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
  }

  onSubmit() {
  }

}
