import { Book } from '../models/book.model';
import { Film } from '../models/film.model';
import { EventEmitter } from '@angular/core';

export class ModalService {
  bookSelected = new EventEmitter<Book>();
  filmSelected = new EventEmitter<Film>();

  passBookInfo(book: Book) {
    this.bookSelected.emit(book);
  }

  passFilmInfo(film: Film) {
    this.filmSelected.emit(film);
  }
}
