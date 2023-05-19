import { Component, OnInit } from '@angular/core';
import { Partido } from '../partido';
import { PartidosService } from '../partidos.service';

@Component({
  selector: 'app-goles-list',
  templateUrl: './goles-list.component.html',
  styleUrls: ['./goles-list.component.css']
})
export class GolesListComponent implements OnInit {

  partidos: Array<Partido> = [];

  constructor(private partidoService: PartidosService) { }

  getPartidos(): void {
    this.partidoService.getPartidos().subscribe((partidos) => { this.partidos = partidos });
  }
  ngOnInit() {
    this.getPartidos();
  }

}
