import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeguroSeguradoComponent } from './cotacao/seguro-segurado/seguro-segurado.component';
import { VeiculoComponent } from './cotacao/veiculo/veiculo.component';
import { QuestPerfilComponent } from './cotacao/quest-perfil/quest-perfil.component';
import { CotarComponent } from './cotacao/cotar/cotar.component';
import { MenuComponent } from './cotacao/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    SeguroSeguradoComponent,
    VeiculoComponent,
    QuestPerfilComponent,
    CotarComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
