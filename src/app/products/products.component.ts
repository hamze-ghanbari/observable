import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { mockdata } from '../classes/mockdata';
import { from, fromEvent, of } from 'rxjs';
import {  concatMap, delay, filter , map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private http : HttpClient , private userservicve : UserService) { }
 @ViewChild('name',{static : true}) input : ElementRef;
  ngOnInit(): void {

    fromEvent(this.input.nativeElement,'input').pipe(
      map(event => event as InputEvent),
      map (data => (data.target as HTMLInputElement).value),
      concatMap(item => this.userservicve.editname(item)),
      tap(i => console.log(i))
    ).subscribe();
    // of(1,2,3,4,5,6,7,8,9).subscribe(val =>{
    //   let body=JSON.stringify({
    //     name : 'hamze'
    //   });
    //   let headers=new HttpHeaders({'Content-Type' : 'application/json; charset = UTF-8'});
    //   let options={headers : headers};

    //   this.http.patch(`https://jsonplaceholder.typicode.com/users/${val}`,body,options).subscribe(console.log);
    // });
  
//  from(mockdata).pipe(
//    filter(user => user.id === 1)
//  ).subscribe(console.log);


  }

}
