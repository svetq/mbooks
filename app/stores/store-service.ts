import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';

import 'rxjs/add/operator/toPromise';
import { Store } from './store';


@Injectable()
export class StoreService {
    constructor(private http: Http, private toastr: ToastsManager) { }

    getStores(): Promise<Store[]>{
        return this.http.get("http://milenabooks.azurewebsites.net/api/Store/")
            .toPromise()
            .then(response => response.json() as Store[])
            .catch(this.handleError);
    }

    createStore(store) : Promise<Store>{
        return this.http.post("http://milenabooks.azurewebsites.net/api/Store/", store)
            .toPromise()
            .then((response) => {
                this.toastr.success(store.Name + " store was successfully created you mama's boy!");
                return response.json();
            })
            .catch(this.handleError);
    }

    updateStore(store : Store): Promise<Store>{
        return this.http.put("http://milenabooks.azurewebsites.net/api/store/" + store.Id, store)
            .toPromise()
            .then((response) => {
                this.toastr.success("The store's name was successfully updated you idiot!");
                return response.json() as Store;
            })
            .catch(this.handleError);
    }

    deleteStore(id): Promise<Store>{
        return this.http.delete("http://milenabooks.azurewebsites.net/api/Store/" + id)
            .toPromise()
            .then((response) => {
                this.toastr.success("The store was successfully fucking removed!");
                return response.json();
            })
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
            .then((response) => {
                this.toastr.success("The fucking book was successfully added!");
                return response.json();
            })
            .catch(this.handleError);
    }

     private handleError(error: any): Promise<any> {
         this.toastr.error('There is some god smacking error!', 'Error!', {toastLife: 3000});
         return Promise.reject(error.message || error);
    }
}