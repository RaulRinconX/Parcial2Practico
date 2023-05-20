import { Component, Input, OnInit } from '@angular/core';
import { EquipoDetail } from '../equipoDetail';
import { ActivatedRoute } from '@angular/router';
import { EquipoService } from '../equipo.service';

@Component({
  selector: 'app-equipo-detail',
  templateUrl: './equipo-detail.component.html',
  styleUrls: ['./equipo-detail.component.css']
})
export class EquipoDetailComponent implements OnInit {

  equipoName!: string;
  @Input() equipoDetail!: EquipoDetail;

  constructor(private equipoService: EquipoService,   private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.equipoDetail === undefined){
      this.equipoName = this.route.snapshot.paramMap.get('name')!
      if (this.equipoName) {
      }
    }

  }
}
