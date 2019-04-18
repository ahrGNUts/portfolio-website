export class Film {
  public title: string;
  public synopsis: string;
  public thumbnailPath: string;
  public imdbLink: string;

  constructor(title: string, synopsis: string, thumbnailPath: string, imdbLink: string) {
    this.title = title;
    this.synopsis = synopsis;
    this.thumbnailPath = thumbnailPath;
    this.imdbLink = imdbLink;
  }
}
