// src/app/lista-compras/lista-compras.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { ListaComprasComponent } from './lista-compras.component';
import { ShoppingService } from '../shopping.service';

describe('ListaComprasComponent', () => {
  let component: ListaComprasComponent;
  let fixture: ComponentFixture<ListaComprasComponent>;
  let shoppingService: ShoppingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule], // Adicionar o FormsModule
      declarations: [ListaComprasComponent],
      providers: [ShoppingService], // Adicionar o ShoppingService
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaComprasComponent);
    component = fixture.componentInstance;
    shoppingService = TestBed.inject(ShoppingService); // Obter a instância do ShoppingService
    fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy(); 
  });

  it('should add item', () => {
    component.itemName = 'Test Item';
    component.addItem();
    expect(shoppingService.getItems()).toContain(jasmine.objectContaining({ name: 'Test Item', bought: false })); // Verifica se o item foi adicionado
  });
});
