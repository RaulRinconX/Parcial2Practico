import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  private apiUrl: string = environment.baseUrl2;

constructor(private http: HttpClient) { }

  getEquipos() {
  return this.http.get(this.apiUrl);
}
}
