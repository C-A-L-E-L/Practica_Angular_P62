import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Costo } from './Costo';
const configUrl = 'assets/datosInfo.json';

@Injectable({
  providedIn: 'root'
})
export class CostoService {
  constructor(private httpclient: HttpClient) {
    console.log('El servicio Http COSTO esta funcionando…')
  }

  obtenerDatos(){ 
    return this.httpclient.get<Costo[]>(configUrl); 
  }
}
