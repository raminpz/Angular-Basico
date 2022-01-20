import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string [] = ['Spiderman','Iroman','Holk','Tor','Ramiro','Emi']

  heroeBorrado:string = ''; //Con este constante haremos para ver los heroes borrados, y esta lo llevamos al html
  borrarHeroe(){
    /** this.heroes.shift();  //Metodo para elimiar desde el principio, todo esto es de JS
    shift, tambien existe pop para eliminar desde el final
     const heroeBorrado = this.heroes.shift();
      console.log(heroeBorrado);
    */
    /** Aqui continuamos para ver los heroes borrados*/
    this.heroeBorrado = this.heroes.shift() || ''; //Es esta la forma
  }


 

}
