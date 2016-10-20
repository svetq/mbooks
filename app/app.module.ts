import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { DashboardComponent } from './Books/dashboard.component';
import { BookDetails } from './Books/book-details.component';
import { BookForm } from './Books/book-form.component';
import { BookService } from './Books/book-service';
import { routing } from './app.routing';
import { AppComponent } from './app.components';
import { StoresComponent } from './Stores/stores.component'
import { StoreService } from './Stores/store-service';
import { StoreForm } from './Stores/store-form.component'
import { TypeaheadModule, DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { SelectStore } from './Stores/select-store.component'
import { AddSingleBook } from "./Stores/add-single-book.component";
import { AddMultipleBooks } from './Stores/add-multiple-books.component'
import { StoreOptions } from './Stores/store-options.component'


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
        DashboardComponent,
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