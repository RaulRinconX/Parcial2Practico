import { Component, OnInit } from '@angular/core';
import { Equipo } from '../equipo';
import { EquipoService } from '../equipo.service';

@Component({
  selector: 'app-equipos-list',
  templateUrl: './equipos-list.component.html',
  styleUrls: ['./equipos-list.component.css']
})
export class EquiposListComponent implements OnInit {

  equipos: Array<Equipo> = [];
  constructor(private equipoService: EquipoService) { }

  getEquipos(): void {
    this.equipoService.getEquipos().subscribe((equipos) => { this.equipos = equipos });
  }

  ngOnInit() {
    this.getEquipos();
  }

}
