import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text = 'João Pedro';
  imageUrl = 'https://picsum.photos/300/300';
  imageDesc = 'Essa é uma imagem';
  textInput = '';
  childText = '';
  number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  retornaNome() {
    return this.text;
  }

  clicou(value: any) {
    console.log(value);
  }

  clicouNoFilho(value: string) {
    this.childText = value;
  }

  incrementa() {
    this.number++;
  }
}
