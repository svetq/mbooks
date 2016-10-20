import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BooksComponent } from './components/books.component';
import { BookDetails } from './components/book-details.component';
import { BookForm } from './components/book-form.component';
import { BookService } from '../Services/book-service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        BooksComponent,
        BookDetails,
        BookForm
    ],
    providers: [BookService]
})

export class BooksModule { }