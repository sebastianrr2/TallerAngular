export class Serie {
  public id: number;
  public title: string;
  public channel: string;
  public seasons: number;
  public synopsis: string;
  public link: string;
  public image: string;

  constructor(
    id: number,
    title: string,
    channel: string,
    seasons: number,
    synopsis: string,
    link: string,
    image: string
){
    this.id = id;
    this.title = title;
    this.channel = channel;
    this.seasons = seasons;
    this.synopsis = synopsis;
    this.link = link;
    this.image = image;
}
}
