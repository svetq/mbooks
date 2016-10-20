import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Params }   from '@angular/router';
import {Book} from "./book";
import { BookService }      from '../Services/book-service';
import { Router }           from '@angular/router';

@Component({
    selector: 'book-details',
    moduleId: module.id,
    templateUrl: 'book-details.html',
    providers: [BookService]
})

export class BookDetails implements OnInit {

    public  book: Book;

    constructor(
        private bookService: BookService,
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        //console.log(book);
        this.route.params.forEach((params: Params) => {
            //console.log("this.route.params= ", this.route.params);
            let id = +params['id'];
            this.bookService.getBookDetails(id)
                .then((book) => {
                    this.book = book;
                });
        })
    }

    allBooks(){
        this.router.navigate(["dashboard"]);
    }

    deleteBook(id){
        this.bookService.deleteBook(id)
            .then(() => {this.router.navigate(["dashboard"])});
    }

    editBook(){
        this.bookService.updateBook(this.book);
    }
}