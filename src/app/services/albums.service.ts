import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { albums } from '../classes/albums';
@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http : HttpClient) { }

  public getAlbums(id : any =1) : Observable<albums[]>{
    return this.http.get<albums[]>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
}
