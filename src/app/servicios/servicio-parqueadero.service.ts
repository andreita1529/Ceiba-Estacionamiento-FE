import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicioParqueaderoService {

  constructor(private http: HttpClient) { }

  crear(data: any) {
    return this.http.post(environment.URL, data);
  }

  listar() {
    return this.http.get(environment.URL);
  }

  salir(placa: string) {
    return this.http.put(environment.URL + '/' + placa, null);
  }
}
