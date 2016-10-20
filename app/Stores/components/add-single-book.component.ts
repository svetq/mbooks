import {FormControl, FormGroup} from "@angular/forms";
import { Observable } from 'rxjs/Observable';
import {StoreService} from "../../Services/store-service";
import {BookService} from "../../Services/book-service";
import { TypeaheadMatch } from '../../../node_modules/ng2-bootstrap/components/typeahead/typeahead-match.class';
import {Component, Input} from '@angular/core';
import {Book} from "../../Books/model/book";
import {Store} from "../model/store";

@Component({
    selector: 'add-single-book',
    moduleId: module.id,
    templateUrl: '../views/add-single-book.html',
    providers: [StoreService, BookService]
})

export class AddSingleBook {

    /*** properties for typeAhead ***/
    public bookCtrl:FormControl = new FormControl();
    public myForm:FormGroup = new FormGroup({
        state: this.bookCtrl
    });
    public customSelected:string = '';
    public groupSelected:string = '';
    public selected:string = '';
    public dataSource:Observable<any>;
    public asyncSelected:string = '';
    public typeaheadLoading:boolean = false;
    public typeaheadNoResults:boolean = false;

    @Input() bookNames:string[];
    @Input() books:Book[];
    @Input() store:Store;

    constructor(private storeService: StoreService) {
        this.bookNames = [];
        this.books = [];
        // this.dataSource = Observable.create((observer:any) => {
        //     // Runs on every search
        //     observer.next(this.asyncSelected);
        // }).mergeMap((token:string) => this.getBooksAsObservable(token));
    }

    /*** Methods for typeAhead***/
    public getBooksAsObservable(token:string):Observable<any> {
        let query = new RegExp(token, 'ig');

        return Observable.of(
            this.booksComplex.filter((book:any) => {
                return query.test(book.name);
            })
        );
    }

    public changeTypeaheadLoading(e:boolean):void {
        this.typeaheadLoading = e;
    }

    public changeTypeaheadNoResults(e:boolean):void {
        this.typeaheadNoResults = e;
    }

    public typeaheadOnSelect(e:TypeaheadMatch):void {
        console.log('Selected value: ', e.value);
    }

    addBook(){
        let bookToAdd = this.books.filter(book => book.Name.toLowerCase() === this.selected) as Book;
        let bookId = bookToAdd[0]['Id'];
        let storeId = this.store.Id;
        this.storeService.addBookToStore({BookId: bookId, StoreId: storeId});
        this.store = this.store;
        this.selected = "";
    }
}