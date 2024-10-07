
import { Component } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { ShoppingItem } from '../shopping-item.model'; 

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent {
  itemName: string = '';   
  notBoughtItems: ShoppingItem[] = [];  
  boughtItems: ShoppingItem[] = [];    

  constructor(private shoppingService: ShoppingService) {
    this.updateLists(); 
  }

  
  updateLists(): void {
    const allItems = this.shoppingService.getItems();
    this.notBoughtItems = allItems.filter(item => !item.bought);
    this.boughtItems = allItems.filter(item => item.bought);
  }

 
  addItem(): void {
    if (this.itemName) {
      const newItem: ShoppingItem = {
        id: Date.now(),  
        name: this.itemName,
        bought: false
      };
      this.shoppingService.addItem(newItem);
      this.itemName = ''; 
      this.updateLists(); 
    }
  }


  markAsBought(id: number): void {
    this.shoppingService.markAsBought(id);
    this.updateLists(); 
  }

  // Método para deletar um item
  deleteItem(id: number): void {
    this.shoppingService.deleteItem(id);
    this.updateLists(); 
  }

  
  editItem(id: number): void {
    const newName = prompt('Digite o novo nome do item:');
    if (newName) {
      this.shoppingService.editItem(id, newName);
      this.updateLists(); 
    }
  }
}
