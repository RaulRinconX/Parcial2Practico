import { Component, OnInit } from '@angular/core';
import { Partido } from '../partido';
import { PartidosService } from '../partidos.service';

@Component({
  selector: 'app-partidos-listar',
  templateUrl: './partidos-listar.component.html',
  styleUrls: ['./partidos-listar.component.css']
})
export class PartidosListarComponent implements OnInit {

  partidos: Array<Partido> = [];

  constructor(private partidoService: PartidosService) { }

  getPartidos(): void {
    this.partidoService.getPartidos().subscribe((partidos) => { this.partidos = partidos });
  }
  ngOnInit() {
    this.getPartidos();
  }
}
