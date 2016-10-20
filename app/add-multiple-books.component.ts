import {Component} from "@angular/core";
import {StoreService} from "./store-service";
import {Input} from '@angular/core';
import {Book} from "./books/book";
import {Store} from "./store";

@Component({
    selector: 'add-multiple-books',
    moduleId: module.id,
    templateUrl: 'add-multiple-books.html',
    providers: [StoreService]
})

export class AddMultipleBooks{

    private booksToAdd : Book[];
    private _books : Book[];

    @Input() store:Store;
    @Input() set books(books: Book[]){
        this._books = books.map((book) => {
            book['checked'] = false;
            return book;
        });
    }
    get books(){
        return this._books;
    }

    constructor(private storeService:StoreService){
        this.books = [];
        this.booksToAdd = [];
    }

    check(book, isChecked : boolean){
        if(isChecked){
            this.booksToAdd.push(book);
        }else{
            this.booksToAdd = this.booksToAdd.filter((b) => b.Id !== book.Id)
        }
    }

    addBooksToStore(storeId){
        this.booksToAdd = this._books.filter((book) => book['checked'] == true);

        let index = 0;
        if (this.booksToAdd.length > 0){
            this.addBooksRecursively(storeId, index)
        }

        this._books = this._books.map((book) => {
            book['checked'] = false;
            return book;
        });
    }

    onStoreUpdate(store){
        this.addBooksToStore(store.Id);
    }

    addBooksRecursively(storeId, index){
        this.storeService.addBookToStore({BookId: this.booksToAdd[index]['Id'], StoreId: storeId})
            .then(() => {
                index = index + 1;
                if (index < this.booksToAdd.length){
                    this.addBooksRecursively(storeId, index);
                }
            })
    }
}