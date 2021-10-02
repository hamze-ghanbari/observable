import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, of } from 'rxjs';
import { concatAll, debounceTime, distinctUntilChanged, map, switchMap, tap } from 'rxjs/operators';


import { albums } from '../classes/albums';
import { AlbumsService } from '../services/albums.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
public albums$ : Observable<albums[]>;
  constructor(private albumservice : AlbumsService) { }
@ViewChild('searchinput',{static : true}) searchinput : ElementRef;
  ngOnInit(): void {
    const filteralbum$ =fromEvent(this.searchinput.nativeElement , 'keyup').pipe(
      debounceTime(300),
      map(event => event as KeyboardEvent),
      map(response =>(response.target as HTMLInputElement).value),
      distinctUntilChanged(),
      // زمانی که سابسکریپشن جدید اهمیت بیشتری دارد و می خواهیم سابسکریپشن های قبلی نادیده گرفته شوند
      switchMap(search => this.getAlbums(search)),
      tap(result => console.log(result))
    );

    this.albums$= of(this.getAlbums(),filteralbum$).pipe(concatAll());
  }

  public getAlbums(id : any =1) : Observable<albums[]>{
    return this.albumservice.getAlbums(id);
  }
}
