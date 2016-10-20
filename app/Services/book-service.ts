import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Book} from "../Books/model/book";

@Injectable()
export class BookService {
    constructor(private http: Http) { }

    getBooks(): Promise<Book[]>{
    return this.http.get("http://milenabooks.azurewebsites.net/api/Books")
        .toPromise()
        .then(response => response.json() as Book[])
        .catch(this.handleError);
    }

    getBookDetails(id): Promise<Book>{
        return this.http.get("http://milenabooks.azurewebsites.net/api/Books/" + id)
            .toPromise()
            .then(response => response.json() as Book)
            .catch(this.handleError);
    }

    createBook(book : Book) : Promise<Book>{
        return this.http.post("http://milenabooks.azurewebsites.net/api/Books", book)
            .toPromise()
            .then(res => res.json())
            .catch(this.handleError);
    }

    deleteBook(id) : Promise<Book> {
        return this.http.delete("http://milenabooks.azurewebsites.net/api/Books/" + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    updateBook(book : Book) : Promise<Book>{
        return this.http.put("http://milenabooks.azurewebsites.net/api/Books/" + book.Id, book)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}