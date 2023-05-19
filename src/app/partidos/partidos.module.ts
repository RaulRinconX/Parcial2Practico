import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PartidosListarComponent } from './partidos-listar/partidos-listar.component'

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [PartidosListarComponent],
  declarations: [PartidosListarComponent]
})
export class PartidosModule { }
