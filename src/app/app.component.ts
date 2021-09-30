import { Component, OnInit } from '@angular/core';
import {  Observable } from 'rxjs';
import { map , shareReplay } from 'rxjs/operators';
import { Todo } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
   http$: Observable<Todo[]>;
   done$ : Observable<Todo[]>;
   undone$ : Observable<Todo[]>;
    ngOnInit(){
      this.http$= new Observable((observer) =>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) =>{
          return response.json();
        })
        .then(data =>{
         observer.next(data);
         observer.complete();
        })
        .catch(error =>{
          observer.error(error);
        })
      });
  
      this.http$ = this.http$.pipe(
        shareReplay()
      );
      this.done$= this.http$.pipe(
        map((todo) => todo.filter((todo) => todo.completed === true))
      );
      this.undone$= this.http$.pipe(
        map((todo) => todo.filter((todo) => todo.completed === false))
      );
  }

}
