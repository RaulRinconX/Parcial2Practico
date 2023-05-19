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
    this.partidoService.getPartidos().subscribe((partidos) => {
      // Ordenamos los equipos según el número de goles de mayor a menor
      partidos.forEach((partido) => {
        partido.home_team.goals = Number(partido.home_team.goals); // Asegurarse de que los goles sean números
      });
      this.partidos = partidos.sort((a, b) => b.home_team.goals - a.home_team.goals);
    });
  }

  ngOnInit() {
    this.getPartidos();
  }

}
