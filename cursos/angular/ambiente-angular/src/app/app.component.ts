import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  count = 0;
  nome = 'João Pedro de Abreu Martins Pereira';
  text = '';
  pessoas = [{ firstName: '', lastName: '', age: 0 }];

  constructor(private peopleService: PeopleService) {

  }

  ngOnInit() {
    this.getPeople();

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

  getPeople() {
    this.peopleService.getPeople().subscribe(people => {
      this.pessoas = people;
    });
  }
}
