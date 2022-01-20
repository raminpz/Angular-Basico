import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';



import { HeroesModule } from './heroes/heores.module';

@NgModule({
  declarations: [
    AppComponent,
   
    
  ],
  imports: [ //Aqui vamos a importar nuestro modulo creado, HeroesModule
    BrowserModule,
    HeroesModule,// Y asi, si se hace cada componente con su modulo, aqui lo agregamos
    ContadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
