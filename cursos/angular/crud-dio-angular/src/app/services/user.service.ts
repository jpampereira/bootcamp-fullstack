import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/2df2b33d-93ce-46a3-bd9a-d8a34ea1ba1e';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Token': '1234567890'
    })
  }

  constructor(private httpClient: HttpClient) { }

  // C.R.U.D. = CREATE, READ, UPDATE, DELETE

  // Salva usuario no banco CREATE
  postUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiUrl, user, this.httpOptions);
  }

  // Retorna a lista de usuarios READ
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  // Lista usuario unico
  getUser(id: string): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiUrl}/id/${id}`);
  }

  // Edita usuario UPDATE
  updateUser(id: string, user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.apiUrl}/id/${id}`, user, this.httpOptions);
  }

  // Exclui o usuario do banco DELETE
  deleteUser(id: number): Observable<User> {
    return this.httpClient.delete<User>(`${this.apiUrl}/id/${id}`);
  }
}
