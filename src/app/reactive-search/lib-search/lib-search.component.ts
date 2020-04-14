import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { tap, map, filter, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-lib-search',
    templateUrl: './lib-search.component.html',
    styleUrls: ['./lib-search.component.scss']
})
export class LibSearchComponent implements OnInit {

    queryField = new FormControl();

    readonly SEARCH_URL = 'https://api.cdnjs.com/libraries';

    resultados$: Observable<any>;

    total: number;

    readonly fields = 'name,filename,version,latest,description,homepage';

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.resultados$ = this.queryField.valueChanges
            .pipe(
                map(value => value.trim()),
                filter(value => this.queryField.value.length > 2),
                debounceTime(400),
                distinctUntilChanged(),
                switchMap(value => this.http.get(this.SEARCH_URL, {
                    params: {
                        search: value,
                        fields: this.fields
                    }
                })),
                tap((res: any) => this.total = res.total),
                map((res: any) => res.results)
            );
    }

    onSearch() {
        const fields = 'name,filename,version,latest,description,homepage';
        const search = this.queryField.value;
        const params = {
            search,
            fields
        };

        if (this.queryField.value && this.queryField.value.trim() !== '') {
            this.resultados$ = this.http.get(this.SEARCH_URL, { params })
                .pipe(
                    tap((res: any) => this.total = res.total),
                    map((res: any) => res.results)
                );
        }
    }
}
