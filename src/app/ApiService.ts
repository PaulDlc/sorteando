import { HttpClient, HttpHeaders, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";

import { catchError, map, retry } from "rxjs/operators";
import { EventoTabla, IClient, ILogin } from "./interfaces";


@Injectable({ providedIn: 'root' })
export class ApiService {
    httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json;charset=utf-8' }) };

    constructor(private http: HttpClient) {
    }

    errorHandl(error: any) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        } else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
    insertarEvento(data: EventoTabla): Observable<EventoTabla> {
        return this.http.post<EventoTabla>("https://ddl6cink76.execute-api.sa-east-1.amazonaws.com/dev/eventos", data, this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.errorHandl)
            );
    }
    obtenerEventos(): Observable<EventoTabla[]> {
        return this.http.get<EventoTabla[]>("")
            .pipe(
                retry(1),
                catchError(this.errorHandl)
            );
    }
    obtenerToken(data: ILogin) {
        return this.http.post("", data, {
            observe: 'response'
        }).pipe(map((response: HttpResponse<any>) => {
            const body = response.body;
            const headers = response.headers;
            const bearerToken = headers.get('Authorization')!;
            const token = bearerToken.replace('Bearer', '');
            localStorage.setItem('token', token);
            return body;
        }))

    }
    getToken() { return localStorage.getItem('token'); }

}