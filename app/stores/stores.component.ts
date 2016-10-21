import { Component, OnInit } from '@angular/core';
import { StoreService } from './store-service'
import { Store } from './store'
import {Book} from "../books/book";
import {BookService} from "../books/book-service";

@Component({
    moduleId: module.id,
    selector: 'stores',
    templateUrl: './stores.html',
    providers: [StoreService]

})

export class StoresComponent implements OnInit{

    public stores : Store[];
    public isEditing : boolean;
    public store : Store;
    public books : Book[];

    constructor(private storeService : StoreService, private bookService : BookService){
        this.isEditing = false;
    }

    ngOnInit(){
        this.storeService.getStores()
            .then((stores) => {
                this.stores = stores;
            });
    }

    editStoreInfo(store){
        this.store = store;
        this.isEditing = true;
    }

    onSelectStore(store){
        this.store = store;
        this.isEditing = true;
    }

    onStoreUpdate(store){
        this.stores = this.stores.map((s) => {
            if(s.Id === store.Id){
                return store;
            }else{
                return s;
            }
        })
    }

    onStoreDelete(store){
        this.stores = this.stores.filter((s) => s.Id != store.Id);
        this.store = new Store();
        this.isEditing = false;
    }

    onStoreCreate(stores){
        this.stores = stores;
    }

    showBooks(){
        this.bookService.getBooks()
            .then((books) => this.books = books);
    }

    onCancel(){
        this.store = new Store();
        this.isEditing = false;
    }
}