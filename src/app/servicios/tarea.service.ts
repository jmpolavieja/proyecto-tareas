import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  misTareas = [
    {id:1, nombre:'Preparar las clases de Angular - sección bibliotecas', terminada: false},
    {id:2, nombre:'Preparar las clases de SOM - sección instalación del SO', terminada: false},
    {id:3, nombre:'Preparar las clases de AW - sección Wordpress', terminada: false},
    {id:4, nombre:'Preparar las clases de SOR - sección SSH', terminada: false},
    {id:5, nombre:'FCT - cerrar empresas', terminada: false},
    {id:6, nombre:'Preceptuación - entrevistas', terminada: false},
    {id:7, nombre:'Preparar examen reuperaión 1 SOM', terminada: false},
    {id:8, nombre:'Preparar proyectos de Angular - sección formularios', terminada: false},
    {id:9, nombre:'Preparar las clases de Angular - sección Angular Material', terminada: false},

  ]

  getListaTareas() {
    return this.misTareas;
  }

  setTarea(tarea: any) {
    this.misTareas.push(tarea);
  }

  updateTarea(tarea: any) {
    this.misTareas[tarea.id-1] = tarea;
  }

  terminaTarea(idTarea: number) {
    console.log(this.misTareas.length);
    this.misTareas[idTarea -1].terminada = !this.misTareas[idTarea -1].terminada;


  }
}
