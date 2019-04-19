import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './about/about.component';
import { BooksComponent } from './books/books.component';
import { FilmComponent } from './film/film.component';
import { ContactComponent } from './contact/contact.component';
import { BookModalComponent } from './book-modal/book-modal.component';
import { FilmModalComponent } from './film-modal/film-modal.component';
import { ConnectionService } from './services/connection.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    AboutComponent,
    BooksComponent,
    FilmComponent,
    ContactComponent,
    BookModalComponent,
    FilmModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ConnectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
