import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { InformacionComponent } from './informacion/informacion.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

import { HttpClientModule } from '@angular/common/http';
import { CostoService } from './costo.service';
import { GastoService } from './gasto.service';
import { FormularioComponent } from './formulario/formulario.component';

import {FormsModule} from '@angular/forms';
import { RegistroComponent } from './registro/registro.component';
import { ReporteComponent } from './reporte/reporte.component';
import { UsuarioComponent } from './usuario/usuario.component'
import { UsuarioService } from './usuario.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InformacionComponent,
    HomeComponent,
    FormularioComponent,
    RegistroComponent,
    ReporteComponent,
    UsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CostoService,GastoService,UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
