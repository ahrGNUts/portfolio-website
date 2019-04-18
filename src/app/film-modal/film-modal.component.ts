import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film.model';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-film-modal',
  templateUrl: './film-modal.component.html',
  styleUrls: ['./film-modal.component.css']
})
export class FilmModalComponent implements OnInit {
  film: Film = new Film('No title', 'No synopsis', '', '');

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalService.filmSelected.subscribe(
      (film: Film) => {
        this.film = film;
      }
    );
  }

}
