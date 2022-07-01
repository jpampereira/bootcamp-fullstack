import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {
    let peopleArray = [
      { firstName: 'Ivonaldo', lastName: 'Soares', age: 26},
      { firstName: 'João Pedro', lastName: 'Pereira', age: 25 },
      { firstName: 'Ana Beatriz', lastName: 'Figueira', age: 22 },
      { firstName: 'Manuella', lastName: 'Martins', age: 36 }
    ];

    return of(peopleArray);
  }
}
