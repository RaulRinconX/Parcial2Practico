import { Component, OnInit } from '@angular/core';
import { division } from '../division'
import { EquipoService } from '../equipo.service';
import { Equipo } from '../equipo';

@Component({
  selector: 'app-equipos-list',
  templateUrl: './equipos-list.component.html',
  styleUrls: ['./equipos-list.component.css']
})
export class EquiposListComponent implements OnInit {

  equipos: Array<Equipo> = [];
  constructor(private equipoService: EquipoService) { }

  getEquipos(): void {
    this.equipoService.getEquipos().subscribe((equipo) => { this.equipos = equipo });
  }

  ngOnInit() {
    this.getEquipos();
  }

}
