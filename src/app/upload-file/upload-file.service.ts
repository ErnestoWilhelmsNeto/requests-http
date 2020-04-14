import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UploadFileService {

    constructor(private http: HttpClient) { }

    upload(files: Set<File>, url: string) {

        const formData = new FormData();
        files.forEach(file => {
            formData.append('file.name', file, file.name);
        });

        const request = new HttpRequest('POST', url, formData);
        // return this.http.request(request);

        // ou

        return this.http.post(url, formData, {
            observe: 'events',
            reportProgress: true
        });
    }

    download(url: string) {
        return this.http.get(url, {
            responseType: 'blob',
            reportProgress: true
        });
    }

    hanldeFile(res: any, fileName: string) {
        const file = new Blob([res], {
            type: res.type
        });

        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            // para IE
            window.navigator.msSaveOrOpenBlob(file);
        } else {
            const blob = window.URL.createObjectURL(file);
            const link = document.createElement('a');
            link.href = blob;
            link.download = 'report.xlsx';
            if (window.navigator.appName) {
                link.click();
            } else { // Safari
                link.dispatchEvent(new MouseEvent('click', {
                    bubbles: true,
                    cancelable: true,
                    view: window
                }));
            }
            // Depois de baixado libera os recursos
            window.URL.revokeObjectURL(blob);
            link.remove();
        }
    }
}
