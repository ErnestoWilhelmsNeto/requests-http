import { Component, OnInit } from '@angular/core';
import { UploadFileService } from '../upload-file.service';
import { filterHttpResponse, uploadProgress } from 'src/app/shared/rxjs-operators';

@Component({
    selector: 'app-upload-file',
    templateUrl: './upload-file.component.html',
    styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

    files: Set<File>;
    percent = 0;
    uploadMessage = '';

    constructor(private uploadService: UploadFileService) { }

    ngOnInit(): void {
    }

    onChange(event) {
        this.uploadMessage = '';
        this.percent = 0;
        const selectedFiles = event.srcElement.files as FileList;
        const fileNames = [];
        this.files = new Set();

        for (const file of Array.from(selectedFiles)) {
            fileNames.push(file.name);
            this.files.add(file);
        }
        document.getElementById('customFileLabel').innerHTML = fileNames.join(', ');
    }

    onUpload() {
        const uploadAPI = 'http://localhost:8000/upload';
        // const uploadAPI = '/api/upload';
        if (this.files && this.files.size > 0) {
            this.uploadService.upload(this.files, uploadAPI)
                .pipe(
                    uploadProgress(progress => {
                        this.percent = progress;
                    }),
                    filterHttpResponse()
                )
                .subscribe(response => this.uploadMessage = 'Conclído Upload de Arquivo');
        }
    }
    onDownLoadExcel() {
        this.uploadService.download('http://localhost:8000/downloadExcel')
            .subscribe((res: any) => {
                this.uploadService.hanldeFile(res, 'report.xlsx');
            });
    }

    onDownLoadPDF() {
        this.uploadService.download('http://localhost:8000/downloadPDF')
            .subscribe((res: any) => {
                this.uploadService.hanldeFile(res, 'report.pdf');
            });

    }
}
