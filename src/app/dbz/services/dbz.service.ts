import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable() // Indica que esto es una clase que se puede inyectar
export class DbzService{ // export, para que pueda ser utilizado fuera de este archivo

  // Propiedades
   private _personajes: Personaje[] = [

    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 7500
    }
  ];

// Getter and Setters
get personajes(): Personaje[]{
  return [...this._personajes];
}

//Constructor
  constructor() {}

//Metodos
agregarPersonaje( personaje: Personaje){ //Con este metodo añadimos nuevos datos a _personajes
  this._personajes.push( personaje );
}




}
