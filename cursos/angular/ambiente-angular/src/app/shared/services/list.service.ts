import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from 'src/app/components/list-api/list-api.component';

export type ApiResponse = {
  info: {};
  results: Character[];
}

@Injectable({
  providedIn: 'root'
})
export class ListService {
  apiUrl = 'http://rickandmortyapi.com/api/character';

  constructor(private httpClient: HttpClient) { }

  getList(): Observable<ApiResponse> {
    return this.httpClient.get<ApiResponse>(this.apiUrl);
  }
}