import { Component, OnInit } from '@angular/core';
import { ServicioParqueaderoService } from 'src/app/servicios/servicio-parqueadero.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  public respuesta;
  constructor(private servicioParqueadero: ServicioParqueaderoService, private toast: ToastrService) { }

  ngOnInit() { }

  listarParqueadero() {
    this.servicioParqueadero.listar().subscribe((res) => {
      this.respuesta = res;
    }, err => {
      this.toast.error(err.error.message, 'Error');
    });
  }

  salirParqueadero(placa: string) {
    this.servicioParqueadero.salir(placa).subscribe((res) => {
      this.listarParqueadero();
    }, err => {
      this.toast.error(err.error.message, 'Error');
    });
  }
}
