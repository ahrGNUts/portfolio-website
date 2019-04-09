import { Book } from '../models/book.model';

export class BooksService {
  private prePath = '../../assets/images/';

  private books: Book[] = [
    new Book('Book 1', 'The first of the series', this.prePath + 'book1.jpg'),
    new Book('Book 2', 'The smash hit sequel', this.prePath + 'book2.jpg'),
    new Book('Book 3', 'The third one that was less well recieved', this.prePath + 'book3.jpg'),
    new Book('Book 4', 'The one where a main character died', this.prePath + 'book4.jpg'),
    new Book('Book 5', '90% feelings, 5% story, 5% unnecessary romantic subplot that goes nowhere', this.prePath + 'book5.jpg'),
    new Book('Book 6', 'Stoked fears about the book to come', this.prePath + 'book6.jpg'),
    new Book('Book 7', 'The one about cannibalism', this.prePath + 'book7.jpg'),
    new Book('Book 8', 'The one that was basically just a punny plot device for its predecessor', this.prePath + 'book8.jpg'),
    new Book('Book 10', 'Included to round things out and tie up loose ends', this.prePath + 'book10.jpg'),
  ];

  getBooks() {
    return this.books.slice();
  }
}
