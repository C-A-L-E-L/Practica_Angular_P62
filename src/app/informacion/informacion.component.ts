import { Component, OnInit } from '@angular/core';

import { CostoService } from '../costo.service';
import { Costo } from '../Costo.js';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {
  deducibles = [
    {
      titulo: "Vivienda",
      img: "../assets/imagenes/vivienda.jpg",
      descripcion: "Son los gastos relacionados con una propiedad que pueden restarse de los impuestos, como intereses hipotecarios, impuestos a la propiedad y costos de mantenimiento.",
      info: " Los intereses pagados en préstamos hipotecarios son deducibles en muchos países."
    },
    {
      titulo: "Salud",
      img: "../assets/imagenes/salud.jpg",
      descripcion: "Son los gastos médicos que pueden deducirse de los impuestos, como servicios médicos, medicamentos, primas de seguros médicos y equipos médicos.",
      info: "Los gastos médicos como consultas, tratamientos y cirugías son deducibles si superan un umbral de ingresos."
    },
    {
      titulo: "Educacion",
      img: "../assets/imagenes/educacion.jpg",
      descripcion: "Son los costos educativos que pueden restarse de los impuestos, como matrículas escolares, colegiaturas universitarias, libros y materiales educativos.",
      info: "Los pagos por educación suelen ser deducibles, desde preescolar hasta educación superior."
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  informacion(deducible: any) {
    alert('Información adicional sobre ' + deducible.titulo + ':\n' + deducible.info);
  }

  borrarDeducible(deducible: any) {
    for (let i = 0; i < this.deducibles.length; i++) {
      if (deducible == this.deducibles[i]) {
        this.deducibles.splice(i, 1);
      }
    }
  }
}
// borrarDeducible(deducible: string) {
// for (let i = 0; i < this.deducibles.length; i++) {
//   if (deducible == this.deducibles[i]) {
//     this.deducibles.splice(i, 1);
//   }
// }
  // }



////////////////////////////

/*
import { Component, OnInit } from '@angular/core';

import { CostoService } from '../costo.service';
import { Costo } from '../Costo.js';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent {
  deducibles: Costo[] = [];

  constructor(private costoService: CostoService) { 
    this.costoService.obtenerDatos().subscribe(data =>  {
        console.log(data);
        this.deducibles=data;
      });
  }

  informacion(deducible: string) {
    alert('Esta es información adicional sobre ' + deducible);
  }
}
*/