import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Book } from "./model/Book";
import { Observable } from 'rxjs';

@Injectable()

export class BooksService{
    private url = 'https://rickandmortyapi.com/api/character';

    httpOptions= {
        Headers: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private http:HttpClient){ }

    getBook():Observable<any>{
        return this.http.get<any>(this.url);
    }
}
