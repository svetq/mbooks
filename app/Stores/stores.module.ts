import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeaheadModule, DropdownModule } from 'ng2-bootstrap/ng2-bootstrap';
import { StoresComponent } from './components/stores.component'
import { StoreService } from '../Services/store-service';
import { StoreForm } from './components/store-form.component'
import { SelectStore } from './components/select-store.component'
import { AddSingleBook } from "./components/add-single-book.component";
import { AddMultipleBooks } from './components/add-multiple-books.component'
import { StoreOptions } from './components/store-options.component'

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