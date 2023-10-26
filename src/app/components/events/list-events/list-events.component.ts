import { Component } from '@angular/core';
import { EventoTabla } from "../../../interfaces";
import { ApiService } from "../../../ApiService";
@Component({
  selector: 'app-list-events',
  templateUrl: './list-events.component.html',
  styleUrls: ['./list-events.component.scss']
})
export class ListEventsComponent {
  eventos: EventoTabla[] = [
    {
      nombre: 'Evento 1',
      descripcion: 'Descripción del Evento 1',
      fecha_inicio: '2023-10-20',
      fecha_fin: '2023-10-22',
      estado: 'Activo'
    },
    {
      nombre: 'Evento 2',
      descripcion: 'Descripción del Evento 2',
      fecha_inicio: '2023-11-05',
      fecha_fin: '2023-11-07',
      estado: 'Activo'
    },
    {
      nombre: 'Evento 2',
      descripcion: 'Descripción del Evento 2',
      fecha_inicio: '2023-11-05',
      fecha_fin: '2023-11-07',
      estado: 'Activo'
    },
    {
      nombre: 'Evento 2',
      descripcion: 'Descripción del Evento 2',
      fecha_inicio: '2023-11-05',
      fecha_fin: '2023-11-07',
      estado: 'Activo'
    },
    {
      nombre: 'Evento 2',
      descripcion: 'Descripción del Evento 2',
      fecha_inicio: '2023-11-05',
      fecha_fin: '2023-11-07',
      estado: 'Activo'
    },
    {
      nombre: 'Evento 2',
      descripcion: 'Descripción del Evento 2',
      fecha_inicio: '2023-11-05',
      fecha_fin: '2023-11-07',
      estado: 'Activo'
    },
    {
      nombre: 'Evento 2',
      descripcion: 'Descripción del Evento 2',
      fecha_inicio: '2023-11-05',
      fecha_fin: '2023-11-07',
      estado: 'Activo'
    },
    // Agrega más eventos aquí...
  ]; // Aquí debes definir el tipo adecuado para tus eventos

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.obtenerEventos().subscribe(eventos => {
      this.eventos = eventos;
    });
  }
}
