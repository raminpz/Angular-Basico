import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'

})
export class AgregarComponent {



  //Se estan agregando @Input, ya sabemos para que sirven
  @Input() nuevo: Personaje = { // Aqui se esta declarando el interface, pero es una declaracion por defecto con valores
    nombre: '',
    poder: 0
  }

  constructor( private dbzService: DbzService){ // Con esto importamos el service


  }

  //El Output(), (output sirve para emitir eventos), se usa cuando se quiere pasar datos del componente hijo al padre
//@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(){ // Esto es funcion agregar, que lo vamos a agregar en el HTML
    if (this.nuevo.nombre.trim().length === 0) {return;} //Esto es una validacion, trim que elimina espacios al inicio y fin, length el tamñaño del arreglo

    this.dbzService.agregarPersonaje( this.nuevo );
  // this.onNuevoPersonaje.emit( this.nuevo );

    this.nuevo = { // Agregamos los dos campos
      nombre: '',
      poder: 0
    }

  }

}
