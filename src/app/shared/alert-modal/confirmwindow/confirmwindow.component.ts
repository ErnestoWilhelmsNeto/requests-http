import { Component, TemplateRef, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-confirmwindow',
    templateUrl: './confirmwindow.component.html'
})
export class ConfirmwindowComponent implements OnInit {

    @Input() title: string;
    @Input() message: string;
    @Input() cancela: 'Cancela';
    @Input() confirma?: 'Confirma';
    @Input() ok?: '';
    @Input() timetout?: 0;

    confirmResult: Subject<boolean>;

    constructor(public bsModalRef: BsModalRef) {
    }

    ngOnInit() {
        this.confirmResult = new Subject();
    }

    show(): BsModalRef {
        return this.bsModalRef;
    }

    private execute(result: boolean) {
        this.confirmResult.next(result);
        this.bsModalRef.hide();
    }

    confirm(): void {
        this.execute(true);
    }

    decline(): void {
        this.execute(false);
    }

    oK() {
        this.execute(true);
    }

    hide(timeOut: number) {
        this.bsModalRef.hide();
    }
}
