import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';

import 'rxjs/add/operator/toPromise';

import {Book} from "./book";

@Injectable()
export class BookService {
    constructor(private http: Http, private toastr:ToastsManager) { }

    getBooks(): Promise<Book[]>{
    return this.http.get("http://milenabooks.azurewebsites.net/api/books")
        .toPromise()
        .then(response => response.json() as Book[])
        .catch(this.handleError);
    }

    getBookDetails(id): Promise<Book>{
        return this.http.get("http://milenabooks.azurewebsites.net/api/books/" + id)
            .toPromise()
            .then(response => response.json() as Book)
            .catch(this.handleError);
    }

    createBook(book : Book) : Promise<Book>{
        return this.http.post("http://milenabooks.azurewebsites.net/api/books", book)
            .toPromise()
            .then((res) => {
                this.toastr.success("The fucking " + book.Name + " was added successfully!")
                return res.json()
            })
            .catch(this.handleError);
    }

    deleteBook(id) : Promise<Book> {
        return this.http.delete("http://milenabooks.azurewebsites.net/api/books/" + id)
            .toPromise()
            .then((res) => {
                this.toastr.success("The fucking book was removed successfully!")
                return res.json()
            })
            .catch(this.handleError);
    }

    updateBook(book : Book) : Promise<Book>{
        return this.http.put("http://milenabooks.azurewebsites.net/api/books/" + book.Id, book)
            .toPromise()
            .then((res) => {
                this.toastr.success("The fucking " + book.Name + " was successfully updated!")
                return res.json()
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        this.toastr.error('There is some god smacking error!', 'Error!', {toastLife: 3000});
        return Promise.reject(error.message || error);
    }
}