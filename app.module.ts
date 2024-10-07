import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { ListaComprasComponent } from './lista-compras/lista-compras.component';
import { ItemComprasComponent } from './item-compras/item-compras.component';
import { ShoppingService } from './shopping.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaComprasComponent,
    ItemComprasComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, 
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
