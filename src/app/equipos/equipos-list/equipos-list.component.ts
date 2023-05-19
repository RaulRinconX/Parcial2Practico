import { Component, OnInit } from '@angular/core';
import { Equipo } from '../equipo';

@Component({
  selector: 'app-equipos-list',
  templateUrl: './equipos-list.component.html',
  styleUrls: ['./equipos-list.component.css']
})
export class EquiposListComponent implements OnInit {

  equipos: Array<Equipo> = [];
  constructor() { }

  ngOnInit() {
  }

}
