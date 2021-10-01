import { Component, OnDestroy, OnInit } from '@angular/core';
import { ɵInternalFormsSharedModule } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { map , take, takeWhile, tap } from 'rxjs/operators';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit  {

  constructor() { }

  ngOnInit(): void {
    fromEvent(document,'click').pipe(
      map(event => event as MouseEvent),
      map(item =>{
        return { 
          x : item.offsetX,
          y : item.offsetY
        }
      }),
     // take(4),
     takeWhile(item => item.x < 500), 
     tap(i => console.log(i))
    ).subscribe();
  }

 
 
}
