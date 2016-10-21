import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeaheadModule, DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { StoresComponent } from './stores.component'
import { StoreService } from './store-service';
import { StoreForm } from './store-form.component'
import { SelectStore } from './select-store.component'
import { AddSingleBook } from "./add-single-book.component";
import { AddMultipleBooks } from './add-multiple-books.component'
import { StoreOptions } from './store-options.component'

@NgModule({
    imports: [
        CommonModule,
        TypeaheadModule,
        DropdownModule
    ],
    declarations: [
        StoresComponent,
        StoreForm,
        SelectStore,
        AddSingleBook,
        AddMultipleBooks,
        StoreOptions
    ],
    providers: [StoreService]
})

export class StoresModule { }