import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from "./books/books.component";
import { BookDetails } from "./books/book-details.component"
import { StoresComponent } from './stores/stores.component'

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

