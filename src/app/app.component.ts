import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TareaService } from './servicios/tarea.service';
import { DetalleTareaComponent } from "./detalle-tarea/detalle-tarea.component";
import { NgClass  } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DetalleTareaComponent, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-tareas';
  tareaService = inject(TareaService);
  tareas = this.tareaService.getListaTareas();


  tareaFin(id: number) {
    console.log(this.tareaService.getListaTareas());
    //this.tareas = this.tareaService.getListaTareas();
    this.tareas[id-1].terminada = !this.tareas[id-1].terminada;
  }
}
