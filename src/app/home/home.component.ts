import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  recipes = [
    {
      title: 'Fricassê de Frango',
      imageUrl: 'caminho-para-imagem-fricasse.jpg',
      rating: 4.5,
      ratingCount: 83
    },
    {
      title: 'Pão Caseiro',
      imageUrl: 'caminho-para-imagem-pao-caseiro.jpg',
      rating: 4.8,
      ratingCount: 620
    },
    {
      title: 'Farofa de Banana Fácil',
      imageUrl: 'caminho-para-imagem-farofa-banana.jpg',
      rating: 4.2,
      ratingCount: 82
    }
  ];
}
