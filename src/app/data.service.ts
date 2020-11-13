import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn : 'root'})

export class DataService {
    apiUrl = 'https://cdi-app-backend.herokuapp.com/unc';

    constructor(private http: HttpClient){}

    query(jsonObject: any): any{
        return this.http.post<any>(this.apiUrl, jsonObject, {responseType: 'json'});
    }

}
