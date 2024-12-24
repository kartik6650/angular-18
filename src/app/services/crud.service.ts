import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { usermodel } from '../model/usermodel';

@Injectable({
  providedIn: 'root'

})
export class CrudService {

  url = "https://jsonplaceholder.typicode.com/posts"

  constructor(private http: HttpClient) { }

  //get api
  getUser(){
   return this.http.get(this.url)
  }

  //post
  saveList(obj:usermodel)  {
   return this.http.post(this.url, obj)
  }

  updatelist(obj:usermodel) : Observable<usermodel>  {
    return this.http.put<usermodel>(`${this.url}/${obj.id}`, obj)
   }

  //  deleteList(obj:usermodel): Observable<usermodel>{
  //   return this.http.delete<usermodel>(`${this.url}/${obj.id}`,obj)
  //  }
  deleteList(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
