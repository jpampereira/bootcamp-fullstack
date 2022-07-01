import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  count = 0;
  nome = 'João Pedro de Abreu Martins Pereira';
  text = '';

  pessoas = [
    { nome: 'Ivonaldo', sobrenome: 'Soares' },
    { nome: 'João Pedro', sobrenome: 'Pereira' },
    { nome: 'Ana Beatriz', sobrenome: 'Figueira' },
    { nome: 'Manuella', sobrenome: 'Martins' }
  ];

  constructor() {

  }

  ngOnInit() {
    const interval = setInterval(() => {
      this.count++;

      if (this.count === 10) {
        clearInterval(interval);
      }
    }, 1000);
  }

  clicou(nome: string): void {
    console.log('Clicou em mim ', nome)
  }
}
