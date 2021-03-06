import { Component, EventEmitter, OnInit, Input, Output, SimpleChange, OnChanges } from '@angular/core';
import 'rxjs/add/observable/of';

import {Book} from "../books/book";
import { Store } from './store';
import { StoreService } from './store-service';
import { BookService } from '../books/book-service';

@Component({
    selector: 'store-form',
    moduleId: module.id,
    templateUrl: './store-form.html',
    providers: [StoreService]
})

export class StoreForm implements OnChanges, OnInit{

    public bookNames : string[];
    public books : Book[];
    public stores : Store[];

    @Input() isEditing : boolean;
    @Input() store : Store;
    @Output() onStoreUpdate = new EventEmitter<Store>();
    @Output() onStoreCreate = new EventEmitter<Store[]>();
    @Output() onStoreDelete = new EventEmitter<Store>();
    @Output() onCancel = new EventEmitter<Store>();

    constructor(private storeService: StoreService, private bookService: BookService) {
        this.bookNames = [];
        this.stores = [];
    }

    ngOnInit(){
        this.bookService.getBooks()
            .then((allBooks) =>{
                this.books = allBooks;
                for(let b in this.books){
                    let bookName = this.books[b]['Name'].toLowerCase();
                    this.bookNames.push(bookName)
                }
            })
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}){
        if(changes['store']['currentValue'] != undefined && changes['store']['currentValue']['Id'] != undefined) {
            this.isEditing = true;
        } else {
            this.store = new Store();
        }
    }

    add(): void {
        console.log("this store on creation = ", this.store);
        this.storeService.createStore(this.store)
            .then((res) => {
                this.resetForm();
                this.storeService.getStores()
                    .then((stores) =>
                    {
                        this.stores = stores;
                        this.onStoreCreate.emit(this.stores);
                    });
            })
    }

    saveChanges() {
        this.storeService.updateStore(this.store)
            .then(res => this.onStoreUpdate.emit(res as Store));
    }

    resetForm(){
        this.store = new Store();
        this.isEditing = false;
    }
}