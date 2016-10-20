import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from "./Books/books.component";
import { BookDetails } from "./Books/book-details.component"
import { StoresComponent } from './Stores/stores.component'

var appRoutes = [
    {
        path: '',
        redirectTo: '/books',
        pathMatch: 'full'
    },
    {
        path: 'books',
        component: BooksComponent
    },
    {
        path: 'book/:id',
        component: BookDetails
    },
    {
        path: 'stores',
        component: StoresComponent
    }
    ,
    {
        path: 'stores/:id',
        component: StoresComponent
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

