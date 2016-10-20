import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `<nav class="navbar navbar-default">
                  <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">Digital Library</a>
                        </div>
                        <ul class="nav navbar-nav">
                          <li><a routerLink="stores">Stores</a></li>
                          <li><a routerLink="">Books</a></li> 
                        </ul>
                  </div>
               </nav>
               <router-outlet></router-outlet>
               `
})
export class AppComponent { }
