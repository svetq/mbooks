import { Component, OnInit } from '@angular/core';

import {Book} from "./book";
import { BookService } from './book-service';
import { Router } from '@angular/router';

@Component({
    selector: 'my-dashboard',
    moduleId: module.id,
    templateUrl: 'dashboard.html',
    providers: [BookService]
})

export class DashboardComponent implements OnInit {

    public books: Book[];
    public book: Book;
    public isUpdating: boolean;

    constructor(private router: Router, private bookService: BookService) {
        this.books = [];
        this.book = new Book();
        this.isUpdating = false;
    }

    ngOnInit() {
        this.bookService.getBooks()
            .then((books) => {
                this.books = books;
            })
    }

    gotoDetail(book: Book): void {
        let link = ['book/', book['Id']];
        this.router.navigate(link);
    }

    editForm(book) {
        this.isUpdating = true;
        this.book = book;
        return this.book;
    }

    saveChanges() {
        this.bookService.updateBook(this.book)
            .then((res) => {
                this.books = this.books.map((book) => {
                    if (book.Id == res.Id) {
                        book = res;
                        return book;
                    } else {
                        return book;
                    }
                });
            });
    }

    deleteBook(id){
        this.bookService.deleteBook(id)
            .then(() => {
                this.books = this.books.filter(book => book.Id !== id);
            });
    }

    onBookUpdate(book : Book){
        this.books = this.books.map((b) => {
            if (b.Id == book.Id){
                return book;
            }else{
                return b;
            }
        })
    }

    onBookCreate(book : Book){
        this.books.push(book);
    }

    onBookDelete(book : Book){
        this.books = this.books.filter(b => b.Id !== book.Id);
    }

    onCancel(){
        this.book = new Book();
    }

}