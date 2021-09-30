import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { mockdata } from '../classes/mockdata';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
data : any;
  constructor(private http : HttpClient) { }
@ViewChild('name', {static : true}) input : ElementRef;
  ngOnInit(): void {

    of(mockdata).subscribe(response =>{
      this.data=response;
    });

// this.http.get('assets/mockdata.json').subscribe(response =>{
// this.data=response;
// });
fromEvent(this.input.nativeElement , 'input').subscribe(console.log);
  }

}
