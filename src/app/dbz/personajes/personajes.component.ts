import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'

})
export class PersonajesComponent {

  get personajes(){
    return this.DbzService.personajes;
  }

  //Este decorador @Input, se usa para pasar datos del componente padre al componente hijo. Ejemplo
  //@Input() personajes: Personaje[] = [];
 constructor( private DbzService: DbzService){

 }

}
