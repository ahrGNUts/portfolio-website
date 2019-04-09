import { Book } from '../models/book.model';
import { EventEmitter } from '@angular/core';

export class ModalService {
  bookSelected = new EventEmitter<Book>();

  passBookInfo(book: Book) {
    this.bookSelected.emit(book);
  }
}
