import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnsubscribeRxjsModule } from './unsubscribe-poc/unsubscribe-rxjs.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from './shared/shared.module';
import { CursosModule } from './cursos/cursos.module';
import { UploadFileModule } from './upload-file/upload-file.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        UnsubscribeRxjsModule,
        ModalModule.forRoot(),
        SharedModule,
        CursosModule,
        UploadFileModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [
        UnsubscribeRxjsModule,
        ModalModule,
        SharedModule]
})
export class AppModule { }
