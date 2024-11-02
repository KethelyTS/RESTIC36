// src/app/shopping.service.ts
import { Injectable } from '@angular/core';
import { ShoppingItem } from './shopping-item.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  private items: ShoppingItem[] = []; 

  constructor() {
   
    this.items = [
      { id: 1, name: 'Leite', bought: false },
      { id: 2, name: 'Pão', bought: false },
      { id: 3, name: 'Ovos', bought: true },
    ];
  }

  
  addItem(item: ShoppingItem): void {
    this.items.push(item);
  }

  
  editItem(id: number, newName: string): void {
    const item = this.items.find((item) => item.id === id);
    if (item) {
      item.name = newName; 
    }
  }

  
  markAsBought(id: number): void {
    const item = this.items.find((item) => item.id === id);
    if (item) {
      item.bought = true; 
    }
  }

  
  deleteItem(id: number): void {
    this.items = this.items.filter((item) => item.id !== id); 
  }

  getItems(): ShoppingItem[] {
    return this.items; 
  }
}
