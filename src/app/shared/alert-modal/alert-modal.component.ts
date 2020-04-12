import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-alert-modal',
    templateUrl: './alert-modal.component.html',
    styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit {

    @Input() type = 'success';
    @Input() message: string;

    constructor(public bsModalRef: BsModalRef) {

    }

    openModalWithComponent() {
        const initialState = {
            list: [],
            title: 'Modal with component'
        };
        this.bsModalRef.content(this.message);
        this.bsModalRef.content.closeBtnName = 'Close';
    }

    onClose() {
        this.bsModalRef.hide();
    }

    ngOnInit() {

    }

}
