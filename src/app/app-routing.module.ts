import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'
import { InformacionComponent } from './informacion/informacion.component';
import { HomeComponent } from './home/home.component';
import { FormularioComponent } from './formulario/formulario.component';
import { RegistroComponent } from './registro/registro.component';
import { ReporteComponent } from './reporte/reporte.component';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'informacion', component:InformacionComponent},
  {path:'formulario', component:FormularioComponent},
  {path:'registro', component:RegistroComponent},
  {path:'reporte', component:ReporteComponent},
  {path:'usuario', component:UsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
