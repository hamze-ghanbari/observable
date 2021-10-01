import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }

  public editname(val : any){
    let body=JSON.stringify({
      name : val
     });
    let headers=new HttpHeaders({'Content-Type' : 'application/json; charset = UTF-8'});
    let options={headers : headers};

   return  this.http.patch(`https://jsonplaceholder.typicode.com/users/1`,body,options).pipe(
      delay(500)
    )
  }
}
