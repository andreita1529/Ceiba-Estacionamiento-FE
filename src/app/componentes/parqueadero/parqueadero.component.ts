import { Component, OnInit, ViewChild } from '@angular/core';
import { ListarComponent } from './listar/listar.component';

@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.component.html',
  styleUrls: ['./parqueadero.component.css']
})
export class ParqueaderoComponent implements OnInit {

  @ViewChild(ListarComponent, { static: true }) listar: ListarComponent;

  constructor() { }

  ngOnInit() {
    this.actualizarLista();
  }

  public actualizarLista(): void {
    this.listar.listarParqueadero();
  }
}
