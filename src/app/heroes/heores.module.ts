import { CommonModule } from '@angular/common';
import {NgModule} from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({ //Los modulos tienen declaraciones que son arreglos, (las declaraciones, indican que cosas va contener este modulo, dentro de las llaves, en otras palabras son los compontes que tenemos.Eje HeroeComponent, y ListadoComponent, en este caso) 
    declarations: [ //Estos estan invisibles, con el export se haran visibles
        HeroeComponent,
        ListadoComponent
    ],
    exports: [ //Los exports, indican que cosas quiero hacer publico o visibles fuera de este modulo. Por ejemplo quiero mostrar ListadoComponent
        ListadoComponent
    ],
    imports: [//Los imports, significan que aqui adentro solo van los modulos
        CommonModule //Esto se usa, cuando en la vista se esta aplicando cindicionales como if, for entre otras
        
    ]
})
export class HeroesModule {}