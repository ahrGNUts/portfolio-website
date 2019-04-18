import { Film } from '../models/film.model';

export class FilmsService {
  private prePath = '../../assets/images/films/';
  private preFilmUrl = 'https://www.imdb.com/title/';

  private films: Film[] = [
    new Film('Film 1', 'His debut in screenwriting. Powerful and raw, though a little unpolished.', this.prePath + 'film1.jpg', this.preFilmUrl + 'tt0097550/'),
    new Film('Film 2', 'An unrelated, underrated second entry largely ignored by the majority of the public.', this.prePath + 'film2.jpg', this.preFilmUrl + 'tt0099974/'),
    new Film('Film 3', 'First production with an international studio. The influence of big money really showed, but it grossed like crazy.', this.prePath + 'film3.jpg', this.preFilmUrl + 'tt0090180/'),
    new Film('Film 4', 'A surprising, off-brand smash hit.', this.prePath + 'film4.jpg', this.preFilmUrl + 'tt0037988/'),
    new Film('Film 5', 'An arthouse favorite, though loved few other places and by few other groups of viewers.', this.prePath + 'film5.jpg', this.preFilmUrl + 'tt0020629/'),
  ];

  getFilms() {
    return this.films.slice();
  }
}
