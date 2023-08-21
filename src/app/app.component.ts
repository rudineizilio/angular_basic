import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularbasico';
  nome = 'Rudinei';
  item = '';
  vetor = ['Tv', 'Geladeira', 'Mesa', 'Computador', 'Notebook'];

  add() {
    let i = this.item;
    this.vetor.push(i);
    this.item = '';
  }

  remover(index: any) {
    this.vetor.splice(index, 1);
  }
}
