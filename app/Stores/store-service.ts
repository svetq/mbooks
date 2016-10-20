import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


import 'rxjs/add/operator/toPromise';
import {Book} from "../Books/book";
import { Store } from './store';


@Injectable()
export class StoreService {
    constructor(private http: Http) { }

    getStores(): Promise<Store[]>{
        return this.http.get("http://milenabooks.azurewebsites.net/api/Store/")
            .toPromise()
            .then(response => response.json() as Store[])
            .catch(this.handleError);
    }

    createStore(store) : Promise<Store>{
        return this.http.post("http://milenabooks.azurewebsites.net/api/Store/", store)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    updateStore(store : Store): Promise<Store>{
        return this.http.put("http://milenabooks.azurewebsites.net/api/store/" + store.Id, store)
            .toPromise()
            .then(response => response.json() as Store)
            .catch(this.handleError);
    }

    deleteStore(id): Promise<Store>{
        return this.http.delete("http://milenabooks.azurewebsites.net/api/Store/" + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getStoreBooks(id): Promise{
        return this.http.get("http://milenabooks.azurewebsites.net/api/store/books/" + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    addBookToStore(data): Promise{
        return this.http.post("http://milenabooks.azurewebsites.net/api/store/book", data)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

     private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}