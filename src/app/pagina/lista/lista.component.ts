import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/produto';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  produtos: Array<Produto> = [
    new Produto('Sardinha', 'email@teste.com', 3, 0.10, '2020-01-01'),
    new Produto('Alface', 'email@teste.com', 1.5, 0, '2020-02-01'),
    new Produto('Arroz', 'email@teste.com', 3.35, 0.15, '2020-03-12'),
  ];

  constructor() {};
}
