import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, map } from 'rxjs';
import { Equipo } from './equipo';
import { division } from './division';
import { group } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  private apiUrl: string = environment.baseUrl2;

  constructor(private http: HttpClient) { }

  // recibe una lista gr groups que tienen como atributo letter y equipos
  // y devuelve una lista de divisiones

  getEquipos(): Observable<Equipo[]> {
    return this.http.get<{ groups: { letter: string, teams: Equipo[] }[] }>(this.apiUrl).pipe(
      map(response => {
        const equipos: Equipo[] = [];
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
