import { Component } from '@angular/core';
import { Book } from '../models/book.model';
import { BooksService } from '../services/books.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  providers: [BooksService]
})
export class BooksComponent {
  books: Book[] = this.booksService.getBooks();

  constructor(private booksService: BooksService,
              private modalService: ModalService) { }

  bookSelected(book) {
    this.modalService.passBookInfo(book);
  }
}
