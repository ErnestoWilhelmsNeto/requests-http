import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/' },
    { path: 'cursos', loadChildren: './cursos/cursos.module#CursosModule' },
    {
        path: 'rxjs-poc',
        loadChildren: './unsubscribe-poc/unsubscribe-rxjs.module#UnsubscribeRxjsModule'
    },
    {
        path: 'upload',
        loadChildren: './upload-file/upload-file.module#UploadFileModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
