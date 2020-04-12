import { Injectable } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmwindowComponent } from './alert-modal/confirmwindow/confirmwindow.component';

enum AlertTypes {
    INFO = 'alert-info',
    DANGER = 'alert-danger',
    SUCCESS = 'alert-success',
    WARNING = 'alert-warning'
}

@Injectable({
    providedIn: 'root'
})
export class AlertModalService {

    constructor(private modalService: BsModalService) { }

    private showAlert(type: AlertTypes, message: string, timeout?: number) {
        const bsModalRef = this.modalService.show(AlertModalComponent);
        bsModalRef.content.type = type;
        bsModalRef.content.message = message;

        if (timeout) {
            setTimeout(() => bsModalRef.hide(), timeout);
        }
    }

    showAlertInfo(message: string) {
        this.showAlert(AlertTypes.INFO, message);
    }

    showAlertDanger(message: string) {
        this.showAlert(AlertTypes.DANGER, message);
    }

    showAlertSuccess(message: string) {
        this.showAlert(AlertTypes.SUCCESS, message, 500);
    }

    showAlertWarning(message: string) {
        this.showAlert(AlertTypes.WARNING, message, 2000);
    }

    showConfirm(title: string, message?: string, confirma?: string, cancela?: string, oKmessage?: string, timeout?: number) {
        const bsModalRef = this.modalService.show(ConfirmwindowComponent);
        bsModalRef.content.title = title;
        if (message) { bsModalRef.content.message = message; }
        if (confirma) { bsModalRef.content.confirma = confirma; }
        if (cancela) { bsModalRef.content.cancela = cancela; }
        if (oKmessage) { bsModalRef.content.oKmessage = oKmessage; }

        if (timeout) {
            setTimeout(() => bsModalRef.hide(), timeout);
        }

        return (bsModalRef.content as ConfirmwindowComponent).confirmResult;
    }
}
