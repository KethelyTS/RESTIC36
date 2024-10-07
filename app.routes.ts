import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaComprasComponent } from './lista-compras/lista-compras.component';
import { ItemComprasComponent } from './item-compras/item-compras.component';

const routes: Routes = [
  { path: '', component: ListaComprasComponent }, // Rota padrão
  // { path: 'outro-caminho', component: OutroComponente }, // Exemplo de outra rota
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
