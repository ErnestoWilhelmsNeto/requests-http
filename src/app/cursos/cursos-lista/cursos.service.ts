import { Curso } from './../curso';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CursosService {

    private readonly API = `${environment.API}cursos`;

    constructor(private http: HttpClient) { }

    list() {
        return this.http.get<Curso[]>(this.API);
    }

    getById(id: number) {
        return this.http.get<Curso>(`${this.API}/${id}`).pipe(take(1));
    }

    update(curso: Curso) {
        if (curso.id !== null) {
            return this.http.put(`${this.API}/${curso.id}`, curso).pipe(take(1));
        } else {
            return this.http.post(this.API, curso).pipe(take(1));
        }
    }

    delete(curso: Curso) {
        return this.http.delete(`${this.API}/${curso.id}`);
    }
}
