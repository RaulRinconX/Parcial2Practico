import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
import { EquipoDetail } from './equipoDetail';
import { division } from './division';
import { group } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  private apiUrl: string = environment.baseUrl2;

  constructor(private http: HttpClient) { }

  getEquipos(): Observable<EquipoDetail[]> {
    return this.http.get<{ groups: { letter: string, teams: EquipoDetail[] }[] }>(this.apiUrl).pipe(
      map(response => {
        const equipos: EquipoDetail[] = [];
        response.groups.forEach(group => {
          group.teams.forEach(equipo => {
            equipo.group_letter = group.letter;
            equipos.push(equipo);
          });
        });
        return equipos;
      })
    );
  }

}
