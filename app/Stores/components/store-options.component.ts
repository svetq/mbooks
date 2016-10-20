import {Component, Output, EventEmitter} from "@angular/core";
import {StoreService} from "../../Services/store-service";
import {Input} from '@angular/core';
import {Book} from "../../Books/model/book";
import {Store} from "../model/store";
import {BookService} from "../../Services/book-service";

@Component({
    selector: 'store-options',
    moduleId: module.id,
    templateUrl: '../views/store-options.html',
    providers: [StoreService, BookService]
})

export class StoreOptions{

    private booksToAdd : Book[];

    @Input() isEditing:boolean;
    @Input() books:Book[];
    @Input() store:Store;

    @Output() onStoreDelete = new EventEmitter<Store>();
    @Output() onCancel = new EventEmitter<Store>();

    constructor(private storeService:StoreService, private bookService:BookService){
        this.books = [];
        this.booksToAdd = [];
    }

    showBooks(id){
        this.storeService.getStoreBooks(id)
            .then((books) => this.books = books)
    }

    deleteStore(store){
        this.storeService.deleteStore(store.Id);
        this.resetForm();
        this.onStoreDelete.emit(store);
    }

    cancelEditing(): void {
        this.resetForm();
        this.onCancel.emit();
    }

    resetForm(){
        this.store = new Store();
        this.isEditing = false;
    }

}