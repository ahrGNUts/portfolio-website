import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.css']
})
export class BookModalComponent implements OnInit {
  book: Book = new Book('No title', 'No synopsis', '');

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalService.bookSelected.subscribe(
      (book: Book) => {
        this.book = book;
      }
    );
  }

}
