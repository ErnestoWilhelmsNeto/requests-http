import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Curso } from '../curso';
import { AlertModalService } from 'src/app/shared/alertmodal.service';
import { Cursos2Service } from '../cursos-lista/cursos2.service';

@Component({
    selector: 'app-curso-form',
    templateUrl: './curso-form.component.html',
    styleUrls: ['./curso-form.component.css']
})
export class CursoFormComponent implements OnInit {

    curso: Curso;
    idCurso = 0;
    inscricao: Subscription;
    form: FormGroup;
    submitted: boolean;

    constructor(private fb: FormBuilder,
                private cursosService: Cursos2Service,
                private route: ActivatedRoute,
                private alerta: AlertModalService,
                private location: Location) {
    }

    exit() {
        this.location.back();
    }

    ngOnInit(): void {

        const curso = this.route.snapshot.data.curso;
        this.form = this.fb.group(
            {
                id: [curso.id],
                nome: [curso.nome, [Validators.required, Validators.minLength(4), Validators.maxLength(200)]],
                autor: [curso.autor, [Validators.required, Validators.minLength(5), Validators.maxLength(200)]]
            }
        );
    }

    hasError(field: string) {
        return this.form.get(field).errors;
    }

    onSubmit() {
        if (this.form.valid) {
            this.cursosService.update(this.form.value).subscribe(
                success => {
                    this.alerta.showAlertSuccess('Transação concluída com sucesso');
                    this.location.back();
                },
                error => this.alerta.showAlertDanger('Falha na Transação'),
                () => this.alerta.showAlertSuccess('Concluído com sucesso')
            );
        }
    }

    onCancel() {
        this.exit();
    }

}
