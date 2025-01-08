import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
  deleteUser(id: number){
    return this.http.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  }

}
