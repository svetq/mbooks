import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent } from './app.components';
import { TypeaheadModule, DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';

import {BooksModule} from './Books/books.module';
import {StoresModule} from './Stores/stores.module'

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing,
        TypeaheadModule,
        DropdownModule,
        StoresModule,
        BooksModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }