import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioParqueaderoService {

  constructor(private http: HttpClient) { }

  crear(data: any) {
    return this.http.post(environment.apiUrl, data);
  }

  listar() {
    return this.http.get(environment.apiUrl);
  }

  salir(placa: string) {
    return this.http.put(environment.apiUrl + '/' + placa, null);
  }
}
