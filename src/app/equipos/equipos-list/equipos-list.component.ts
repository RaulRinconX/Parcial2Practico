import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../equipo.service';
import { EquipoDetail } from '../equipoDetail';

@Component({
  selector: 'app-equipos-list',
  templateUrl: './equipos-list.component.html',
  styleUrls: ['./equipos-list.component.css']
})
export class EquiposListComponent implements OnInit {

  selected: Boolean = false;

  selectedEquipo!: EquipoDetail;
  equipos: Array<EquipoDetail> = [];
  constructor(private equipoService: EquipoService) { }

  getEquipos(): void {
    this.equipoService.getEquipos().subscribe((equipos) => { this.equipos = equipos });
  }

  onSelected(equipo: EquipoDetail): void {
    this.selected = true;
    this.selectedEquipo = equipo;
  }

  ngOnInit() {
    this.getEquipos();
  }

}
