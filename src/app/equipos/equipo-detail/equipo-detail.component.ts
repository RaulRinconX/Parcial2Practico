import { Component, Input, OnInit } from '@angular/core';
import { EquipoDetail } from '../equipoDetail';


@Component({
  selector: 'app-equipo-detail',
  templateUrl: './equipo-detail.component.html',
  styleUrls: ['./equipo-detail.component.css']
})
export class EquipoDetailComponent implements OnInit {

  @Input() equipoDetail!: EquipoDetail;

  constructor() { }

  ngOnInit() {
  }

}
