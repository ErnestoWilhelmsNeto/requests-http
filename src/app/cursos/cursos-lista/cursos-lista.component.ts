import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Curso } from '../curso';
import { Observable, Subscription, empty, of, Subject, EMPTY } from 'rxjs';
import { delay, catchError, switchMap, take } from 'rxjs/operators';
import { AlertModalService } from 'src/app/shared/alertmodal.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { Cursos2Service } from './cursos2.service';

@Component({
    selector: 'app-cursos-lista',
    templateUrl: './cursos-lista.component.html',
    styleUrls: ['./cursos-lista.component.scss']
})

export class CursosListaComponent implements OnInit, OnDestroy {

    // cursos: Curso[];

    cursos$: Observable<Curso[]>;
    error$ = new Subject<boolean>();

    deleteModalRef: BsModalRef;

    subscription: Subscription;

    curso: Curso;

    constructor(private cursosService: Cursos2Service,
                private alertModalService: AlertModalService,
                private modalService: BsModalService,
        // tslint:disable-next-line: align
        private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        // Com subscribe explicito
        // this.subscription = this.cursosService.list().subscribe(resultado => this.cursos = resultado);
        this.onRefresh();
    }

    onRefresh() {
        // Com subscribe async
        this.cursos$ = this.cursosService.list()
            .pipe(
                catchError(error => {
                    console.error(error);
                    // this.error$.next(true);
                    this.alertModalService.showAlertDanger('Erro ao carregar cursos. Tente mais tarde');
                    // tslint:disable-next-line: deprecation
                    return this.cursosService.list();
                })
            );

        this.cursosService.list().subscribe(
            dados => {
                this.alertModalService.showAlertSuccess('Carregado');
            }
        );
    }

    editarCurso(idCurso: number) {
        this.router.navigate(['editar', idCurso], { relativeTo: this.route });
    }

    deleta(curso: Curso) {
        this.curso = curso;
        const result$ = this.alertModalService.showConfirm('Exclusão', 'Confirma excluir registro', 'Sim', 'Não', '', 10000);
        result$.asObservable().pipe(
            take(1),
            switchMap(result => result ? this.cursosService.delete(this.curso) : EMPTY)
        ).subscribe(
            success => {
                this.onRefresh();
                this.alertModalService.showAlertSuccess('Excluído');
            },
            error => this.alertModalService.showAlertDanger('Falha na Exclusão')
        );
    }

    ngOnDestroy() {
        //   this.subscription.unsubscribe();
    }

}

