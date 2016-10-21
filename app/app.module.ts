import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.components';
import { TypeaheadModule, DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';

import {BooksModule} from './books/books.module';
import {StoresModule} from './stores/stores.module'

import {ToastModule} from 'ng2-toastr/ng2-toastr';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        TypeaheadModule,
        DropdownModule,
        StoresModule,
        BooksModule,
        ToastModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }