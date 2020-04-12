import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';

export class CrudService<T> {

    constructor(protected http: HttpClient, private API_URL: string) { }

    list() {
        return this.http.get<T[]>(this.API_URL);
    }

    getById(id: number) {
        return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
    }

    create(record: T) {
            return this.http.post(this.API_URL, record).pipe(take(1));
    }

    update(record: T) {
            // tslint:disable-next-line: no-string-literal
            return this.http.put(`${this.API_URL}/${record['id']}`, record).pipe(take(1));
    }

    delete(record: T) {
        // tslint:disable-next-line: no-string-literal
        return this.http.delete(`${this.API_URL}/${record['id']}`);
    }
}
