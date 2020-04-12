import { CommonModule, } from '@angular/common';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CursosRoutingModule } from './cursos-routing.module';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import { CursoFormComponent } from './curso-form/curso-form.component';

@NgModule({
    declarations: [
        CursosListaComponent,
        CursoFormComponent,
    ],
    imports: [
        CommonModule,
        CursosRoutingModule,
        ModalModule.forRoot(),
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [CursosRoutingModule]

})
export class CursosModule { }
