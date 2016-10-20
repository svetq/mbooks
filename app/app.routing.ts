import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from "./dashboard.component";
import { BookDetails } from "./Books/book-details.component"
import { StoresComponent } from './stores.component'

var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
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

