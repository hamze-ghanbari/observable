import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { mockdata } from '../classes/mockdata';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
data : any;
responsefrom : any;
  constructor(private http : HttpClient) { }
@ViewChild('name', {static : true}) input : ElementRef;
  ngOnInit(): void {

    of(mockdata).subscribe(response =>{
      this.data=response;
    });

// this.http.get('assets/mockdata.json').subscribe(response =>{
// this.data=response;
// });
fromEvent(this.input.nativeElement , 'input').pipe(
  map(event => event as InputEvent),
  map (data =>(data.target as HTMLInputElement).value),
  tap(item => this.responsefrom=item)
).subscribe();
  }

}
