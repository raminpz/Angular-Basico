import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorModule } from './contador/contador.module';



import { HeroesModule } from './heroes/heores.module';
import { MainPageComponent } from './dbz/main-page/main-page.component';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
   
    
  ],
  imports: [ //Aqui vamos a importar nuestro modulo creado, HeroesModule
    BrowserModule,
    HeroesModule,// Y asi, si se hace cada componente con su modulo, aqui lo agregamos
    ContadorModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
