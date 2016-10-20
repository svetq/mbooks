import {Component, Output, EventEmitter} from "@angular/core";
import {StoreService} from "./store-service";
import {Input} from '@angular/core';
import {Book} from "./books/book";
import {Store} from "./store";
import {BookService} from "./Books/book-service";

@Component({
    selector: 'store-options',
    moduleId: module.id,
    templateUrl: 'store-options.html',
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