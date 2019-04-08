import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BooksComponent } from './books/books.component';
import { FilmComponent } from './film/film.component';
import { ContactComponent } from './contact/contact.component';
import { NgModule } from '@angular/core';

const appRoutes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'books', component: BooksComponent },
  { path: 'film', component: FilmComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
