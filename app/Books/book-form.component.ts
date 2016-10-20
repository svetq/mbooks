import { Component, EventEmitter, OnInit, Input, Output, SimpleChange, OnChanges } from '@angular/core';

import {Book} from "./book";
import { BookService } from './book-service';

@Component({
    selector: 'book-form',
    moduleId: module.id,
    templateUrl: 'book-form.html',
    providers: [BookService]
})

export class BookForm implements OnChanges{

    @Input() isUpdating : boolean;
    @Input() book:Book;
    // _book:Book;
    // @Input() set book(book: Book){
    //     //console.log("setting a book = ", book);
    //     if(book != undefined && book.Id != undefined) {
    //         this.isUpdating = true;
    //         this._book = new Book();
    //     } else {
    //         this._book = book;
    //     }
    //
    // }
    // get book(){
    //     return this._book;
    // }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}){
        if(changes['book']['currentValue'] != undefined && changes['book']['currentValue']['Id'] != undefined) {
            this.isUpdating = true;
        } else {
            this.book = new Book();
        }
    }

    @Output() onBookUpdate = new EventEmitter<Book>();
    @Output() onBookCreate = new EventEmitter<Book>();
    @Output() onBookDelete = new EventEmitter<Book>();
    @Output() onCancel = new EventEmitter<Book>();

    constructor(private bookService: BookService) {
    }

    add(): void {
        this.bookService.createBook(this.book)
            .then((res) => {
                this.resetForm();
                this.onBookCreate.emit(res as Book);
            });
    }

    saveChanges() {
        this.bookService.updateBook(this.book)
            .then((res) => {
                this.resetForm();
                this.onBookUpdate.emit(res as Book);
            });
    }

    deleteBook(book){
        this.bookService.deleteBook(book.Id);
        this.resetForm();
        this.onBookDelete.emit(book as Book);
    }

    cancelEditing(){
        this.resetForm();
        this.onCancel.emit();
    }

    resetForm(){
        this.book = new Book();
        this.isUpdating = false;
    }
}