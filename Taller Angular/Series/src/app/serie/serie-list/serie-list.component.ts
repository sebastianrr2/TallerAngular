import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css'],
  providers:[SerieService]
})
export class SerieListComponent implements OnInit {

  listaSeries: Array<Serie> =[];

  constructor(private servicio: SerieService) { }

  getSeries():void
  {
    this.servicio.getSeries().subscribe(series => this.listaSeries = series);
  }

  ngOnInit() {
    this.getSeries();
  }

  promedio(): number
  {
    let num = 0;
    for(let i=0; i<this.listaSeries.length; i++)
    {
      num += this.listaSeries[i].seasons;
    }
    let promedio = num/this.listaSeries.length;
    return promedio;
  }

}
