import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,  of } from 'rxjs';

@Injectable()
export class DataService {

    constructor(private http: HttpClient) {
        this.getJSON().subscribe(data => {
            console.log(data);
        });
    }

    public getJSON(): Observable<any> {
        return this.http.get('./assets/words.json');
    }

}
