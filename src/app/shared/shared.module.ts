import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmwindowComponent } from './alert-modal/confirmwindow/confirmwindow.component';



@NgModule({
    declarations: [AlertModalComponent, ConfirmwindowComponent],
    imports: [
        CommonModule
    ],
    exports: [AlertModalComponent, ConfirmwindowComponent],
    entryComponents: [AlertModalComponent, ConfirmwindowComponent]
})
export class SharedModule { }
