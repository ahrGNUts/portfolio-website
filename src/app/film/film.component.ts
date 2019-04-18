import { Component, OnInit } from '@angular/core';
import { Film } from '../models/film.model';
import { FilmsService } from '../services/films.service';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css'],
  providers: [FilmsService]
})
export class FilmComponent implements OnInit {

  films: Film[] = this.filmsService.getFilms();

  constructor(private filmsService: FilmsService,
              private modalService: ModalService) { }

  ngOnInit() {
  }

  filmSelected(film: Film) {
    this.modalService.passFilmInfo(film);
  }

}
