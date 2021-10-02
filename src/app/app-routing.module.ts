import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'aboutus' , component : AboutComponent},
  {path : 'contactus' , component : ContactusComponent},
  {path : 'products' , component : ProductsComponent},
  {path : 'gallery' , component : GalleryComponent},
  {path : 'search' , component : SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
