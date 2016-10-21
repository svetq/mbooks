import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BooksComponent } from './books.component';
import { BookDetails } from './book-details.component';
import { BookForm } from './book-form.component';
import { BookService } from './book-service';

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