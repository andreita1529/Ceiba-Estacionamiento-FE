import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearComponent } from './componentes/crear/crear.component';


const routes: Routes = [
  {
    path: 'parqueadero',
    component: CrearComponent
  },
  {
    path: '**',
    redirectTo: 'parqueadero'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
