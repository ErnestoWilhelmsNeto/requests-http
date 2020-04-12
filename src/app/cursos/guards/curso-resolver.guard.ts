import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Curso } from '../curso';
import { CursosService } from '../cursos-lista/cursos.service';

@Injectable({
    providedIn: 'root'
})
export class CursoResolverGuard implements Resolve<Curso> {

    constructor(private cursosService: CursosService) {

    }

    resolve(route: ActivatedRouteSnapshot): Observable<Curso> {
        if (route.params && route.params.id) {
            return this.cursosService.getById(route.params.id);
        } else {
            return of({
                id: null,
                nome: null,
                autor: null
            });
        }
    }
}
