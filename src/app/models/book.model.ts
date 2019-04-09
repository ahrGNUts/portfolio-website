export class Book {
  public title: string;
  public synopsis: string;
  public thumbnailPath: string;

  constructor(title: string, synopsis: string, thumbnailPath: string) {
    this.title = title;
    this.synopsis = synopsis;
    this.thumbnailPath = thumbnailPath;
  }
}
