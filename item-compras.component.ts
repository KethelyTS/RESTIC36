import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ShoppingItem } from '../shopping-item.model';

@Component({
  selector: 'app-item-compras',  
  templateUrl: './item-compras.component.html',
  styleUrls: ['./item-compras.component.css']
})
export class ItemComprasComponent {
  @Input() item!: ShoppingItem;
  @Output() markAsBought = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
  @Output() edit = new EventEmitter<void>();

  toggleBought(): void {
    this.markAsBought.emit();
  }

  deleteItem(): void {
    this.delete.emit();
  }

  editItem(): void {
    this.edit.emit();
  }
}