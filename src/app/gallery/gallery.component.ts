
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { fromEvent, of } from 'rxjs';
import { delay, exhaustMap, mergeMap, tap } from 'rxjs/operators';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private http : HttpClient) { }
@ViewChild('editbutton' , { static : true}) editbutton : ElementRef;
  ngOnInit(): void {
    of(1,2,3,4,5,6,7,8,9).pipe(
      // زمانی که ترتیب سابسکریپشن ها اهمیت ندارد
      mergeMap(value => this.patchposts(value)),
      tap(val => console.log(val))
    ).subscribe();

    fromEvent(this.editbutton.nativeElement , 'click').pipe(
      // تا زمانی که جواب سابسکریپشن قبلی برنگشته هر سابسکرپشن جدید نادیده گرفته شود 
      exhaustMap(value => this.patchpost()),
      tap(val => console.log(val))
    ).subscribe()
    
  }

  public patchposts(postid : number){
    let body=JSON.stringify(
      {
        name : 'hamze ghanbari'
      }
    );
    let headers=new HttpHeaders({'Content-Type' : 'application/json'});
    let options={headers : headers};
    return this.http.patch(`https://jsonplaceholder.typicode.com/users/${postid}`,body , options);
  }
  public patchpost(){
    let body=JSON.stringify(
      {
        name : 'hamze ghanbari'
      }
    );
    let headers=new HttpHeaders({'Content-Type' : 'application/json'});
    let options={headers : headers};
    return this.http.patch(`https://jsonplaceholder.typicode.com/users/1`,body , options).pipe(
      delay(2000)
    );
  }
}
