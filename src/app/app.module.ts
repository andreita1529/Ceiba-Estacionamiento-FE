import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BarraModule } from './componentes/barra/barra.module';
import { ParqueaderoModule } from './componentes/parqueadero/parqueadero.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    BarraModule,
    ParqueaderoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
