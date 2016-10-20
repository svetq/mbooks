import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BooksComponent } from './Books/components/books.component';
import { BookDetails } from './Books/components/book-details.component';
import { BookForm } from './Books/components/book-form.component';
import { BookService } from './Services/book-service';
import { routing } from './app.routing';
import { AppComponent } from './app.components';
import { StoresComponent } from './Stores/components/stores.component'
import { StoreService } from './Services/store-service';
import { StoreForm } from './Stores/components/store-form.component'
import { TypeaheadModule, DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { SelectStore } from './Stores/components/select-store.component'
import { AddSingleBook } from "./Stores/components/add-single-book.component";
import { AddMultipleBooks } from './Stores/components/add-multiple-books.component'
import { StoreOptions } from './Stores/components/store-options.component'


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        TypeaheadModule,
        DropdownModule
    ],
    declarations: [
        AppComponent,
        BooksComponent,
        BookDetails,
        BookForm,
        StoresComponent,
        StoreForm,
        SelectStore,
        AddSingleBook,
        AddMultipleBooks,
        StoreOptions
    ],
    bootstrap: [AppComponent],
    providers: [BookService, StoreService]
})

export class AppModule { }