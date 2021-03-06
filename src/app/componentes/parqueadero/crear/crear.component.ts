import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ServicioParqueaderoService } from 'src/app/servicios/servicio-parqueadero.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {


  @Output()
  listado = new EventEmitter<any>();

  public parqueaderoDatos = {
    placa: null,
    tipoVehiculo: null,
    cilindraje: null
  };

  constructor(private servicioParqueadero: ServicioParqueaderoService, private toast: ToastrService) { }

  ngOnInit() {
  }

  crearParqueadero() {
    this.servicioParqueadero.crear(this.parqueaderoDatos).subscribe((res) => {
      this.listado.emit();
      this.parqueaderoDatos = {
        placa: null,
        tipoVehiculo: null,
        cilindraje: null
      };
    }, err => {
      this.toast.error(err.error.message, 'Error');
    });
  }
}
