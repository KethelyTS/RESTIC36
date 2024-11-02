// src/app/lista-compras/lista-compras.component.ts
import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { ShoppingItem } from '../shopping-item.model'; 

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html',
  styleUrls: ['./lista-compras.component.css']
})
export class ListaComprasComponent implements OnInit {
  newItem: string = '';   
  notBoughtItems: ShoppingItem[] = [];  
  boughtItems: ShoppingItem[] = [];    

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit() {
    this.loadShoppingList();
  }

  loadShoppingList(): void {
    this.shoppingService.getItems().subscribe(allItems => {
      this.notBoughtItems = allItems.filter(item => !item.bought);
      this.boughtItems = allItems.filter(item => item.bought);
    });
  }

  addItem(): void {
    if (this.newItem.trim()) {
      const item: ShoppingItem = {
        id: Date.now(),
        name: this.newItem,
        bought: false
      };
      this.shoppingService.addItem(item).subscribe(() => {
        this.newItem = '';
        this.loadShoppingList();
      });
    }
  }

  markAsBought(id: number): void {
    this.shoppingService.markAsBought(id).subscribe(() => {
      this.loadShoppingList(); 
    });
  }

  deleteItem(id: number): void {
    this.shoppingService.deleteItem(id).subscribe(() => {
      this.loadShoppingList(); 
    });
  }

  editItem(id: number): void {
    const newName = prompt('Digite o novo nome do item:');
    if (newName) {
      this.shoppingService.editItem(id, newName).subscribe(() => {
        this.loadShoppingList(); 
      });
    }
  }
}
