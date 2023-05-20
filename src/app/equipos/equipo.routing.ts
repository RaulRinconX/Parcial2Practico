import { Routes, RouterModule } from '@angular/router';
import { EquiposListComponent } from './equipos-list/equipos-list.component';
import { EquipoDetailComponent } from './equipo-detail/equipo-detail.component';
import { NgModule } from '@angular/core';

const routes: Routes = [{
  path: 'books',
  children: [
    {
      path: 'list',
      component: EquiposListComponent
    },
    {
      path: ':id',
      component: EquiposListComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipoRoutingModule { }
