import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquiposListComponent } from './equipos-list/equipos-list.component';
import { EquipoDetailComponent } from './equipo-detail/equipo-detail.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [EquiposListComponent],
  declarations: [EquiposListComponent, EquipoDetailComponent]
})
export class EquiposModule { }
