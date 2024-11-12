import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TareaService } from '../servicios/tarea.service';


@Component({
  selector: 'app-detalle-tarea',
  standalone: true,
  imports: [],
  templateUrl: './detalle-tarea.component.html',
  styleUrl: './detalle-tarea.component.css'
})
export class DetalleTareaComponent {
  tareaService = inject(TareaService);
  @Input() tarea: any;
  @Output() tareaFinalizada = new EventEmitter<number>();

  terminarTarea() {
    console.log('terminar tarea', this.tarea.terminada);
    this.tareaService.terminaTarea(this.tarea.id);
    this.tarea.terminada = !this.tarea.terminada;
    this.tareaFinalizada.emit(this.tarea.id);
  }
}
