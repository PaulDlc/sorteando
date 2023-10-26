import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from "../../../ApiService";
import { EventoTabla } from "../../../interfaces";
@Component({
  selector: 'app-create-events',
  templateUrl: './create-events.component.html',
  styleUrls: ['./create-events.component.scss']
})
export class CreateEventsComponent implements OnInit {

  evento: EventoTabla = {} as EventoTabla;
  formulario: boolean = true;
  constructor(private api: ApiService) { }
  ngOnInit(): void {
  }
  /*
  upload(event: any) {
    const file = event.target.files[0];
    this.evento.imagen = file;
  }
*/

  vistaFormulario() {
    this.formulario = false;
  }
  get nombre() {
    return this.formEventsCreate.get('nombre') as FormControl;
  }

  get descripcion() {
    return this.formEventsCreate.get('descripcion') as FormControl;

  }
  get fecha_inicio() {
    return this.formEventsCreate.get('fecha_inicio') as FormControl;

  }
  get fecha_fin() {
    return this.formEventsCreate.get('fecha_fin') as FormControl;

  }
  formEventsCreate = new FormGroup({
    'nombre': new FormControl('', [Validators.required]),
    'descripcion': new FormControl('', [Validators.required]),
    'fecha_inicio': new FormControl('', Validators.required),
    'fecha_fin': new FormControl('', [Validators.required]),
  });

  insertar() {
    console.log("dentro del metodo insertar");
    this.evento.nombre = this.nombre.value;
    this.evento.descripcion = this.descripcion.value;
    this.evento.fecha_inicio = this.fecha_inicio.value;
    this.evento.fecha_fin = this.fecha_fin.value;

    this.evento.estado = "1";
    console.log(this.evento.nombre);

    this.api.insertarEvento(this.evento).subscribe(retorno => {
      console.log(retorno)
    });
    this.formulario = true;
  }
}
