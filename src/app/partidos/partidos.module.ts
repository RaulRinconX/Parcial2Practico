import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidosListarComponent } from './partidos-listar/partidos-listar.component'
import { GolesListComponent } from './goles-list/goles-list.component'

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PartidosListarComponent, GolesListComponent],
  declarations: [PartidosListarComponent, GolesListComponent ]
})
export class PartidosModule { }
