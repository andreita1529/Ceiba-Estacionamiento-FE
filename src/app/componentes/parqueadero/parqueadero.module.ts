import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParqueaderoComponent } from './parqueadero.component';
import { CrearComponent } from './crear/crear.component';
import { ListarComponent } from './listar/listar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ParqueaderoComponent,
    ListarComponent,
    CrearComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ], exports: [
    ParqueaderoComponent,
    ListarComponent,
    CrearComponent
  ]
})
export class ParqueaderoModule { }
