import { Component } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-recipe-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  recipes = [
    {
      image: '../.../../img/pao-caseiro.jpeg' ,
      name: 'Pão Caseiro',
      description: 'Um pão caseiro fofo e bem quentinho e um bom café era tudo o que você queria neste momento?',
      rating: 4
    },
    {
      image: '../.../../img/pudim-de-leite-condensado.jpeg',
      name: 'Pudim de Leite Condensado',
      description: 'É muito simples e rápida de se preparar e vai ficar igual ao da mamãe.',
      rating: 5
    },
    {
      image: '../.../../img/pave-de-limao.jpeg',
      name: 'Pavê de Limão',
      description: 'Pavê de limão é aquele sobremesa que ganha a gente já só de imaginar. ',
      rating: 3
    },
  ];
} 
