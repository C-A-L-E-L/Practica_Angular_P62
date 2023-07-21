import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Usuario } from './Usuario';
const configUrl = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpclient: HttpClient) {
    console.log('El servicio Http Usuario esta funcionando…')
  }

  obtenerDatos(){ 
    return this.httpclient.get<Usuario[]>(configUrl); 
  }
}
