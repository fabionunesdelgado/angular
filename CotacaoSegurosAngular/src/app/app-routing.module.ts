import { MenuComponent } from './cotacao/menu/menu.component';
import { SeguroSeguradoComponent } from './cotacao/seguro-segurado/seguro-segurado.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculoComponent } from './cotacao/veiculo/veiculo.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'seguro-segurado', component: SeguroSeguradoComponent },
  { path: 'veiculo/:id', component: VeiculoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
