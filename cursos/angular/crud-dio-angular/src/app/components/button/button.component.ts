import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() btnText: string = 'Clique aqui';
  @Input() btnType: string = '';
  @Output() childClick = new EventEmitter<string>();
  textFilho = 'Clicou no filho!'

  constructor() { }

  ngOnInit(): void {
  }

  clicou(): void {
    this.childClick.emit(this.textFilho);
  }
}
