// src/app/app.component.spec.ts

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA] // Ignora erros de esquema de componentes filhos
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance; // Instância do componente
    fixture.detectChanges(); // Aciona o ciclo de detecção de alterações
  });

  it('should create the app', () => {
    expect(component).toBeTruthy(); // Verifica se o componente foi criado
  });

  it(`should have as title 'lista-compras'`, () => {
    expect(component.title).toEqual('lista-compras'); // Verifica se o título é correto
  });

  it('should render title in a h1 tag', () => {
    const compiled = fixture.nativeElement; // Obtém o elemento nativo do DOM
    expect(compiled.querySelector('h1').textContent).toContain('Lista de Compras'); // Verifica se o texto está presente no h1
  });
});
