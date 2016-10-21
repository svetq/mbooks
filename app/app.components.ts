import { Component } from '@angular/core';
import {ToastsManager, Toast} from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'my-app',
    template: `<nav class="navbar navbar-default">
                  <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">Digital Library</a>
                        </div>
                        <ul class="nav navbar-nav">
                          <li><a routerLink="stores">Stores</a></li>
                          <li><a routerLink="books">Books</a></li> 
                        </ul>
                  </div>
               </nav>
               <router-outlet></router-outlet>
               `
})
export class AppComponent {
    constructor(private toastr: ToastsManager) {

    }

    showSuccess() {
        this.toastr.success('You are awesome!', 'Success!', {toastLife: 3000});
    }

    showError() {
        this.toastr.error('This is not good!', 'Oops!');
    }

    showWarning() {
        this.toastr.warning('You are being warned.', 'Alert!');
    }

    showInfo() {
        this.toastr.info('Just some information for you.');
    }

    showClickToDismiss() {
        this.toastr.info('Please click to dismiss', 'No auto dismiss', {dismiss: 'click'});
    }

    showCustomLife() {
        this.toastr.warning('The toast will auto dismiss in 8 seconds', null, {toastLife: 8000});
    }
    showControlled() {
        this.toastr.info('This is toaster that is controlled by developer! Will be dismissed in 5 seconds.', 'Controlled!', {dismiss: 'controlled'})
            .then((toast: Toast) => {
                setTimeout(() => {
                    this.toastr.dismissToast(toast);
                }, 5000);
            });
    }

    showCustomHTML() {
        this.toastr.custom('<span style="color: #bd362f">This message should be in red with blank background. Click to dismiss.</span>',
            'Custom Message', {dismiss: 'click'});
        this.toastr.info('<span style="color: #bd362f">This should be red, </span><br/><span>and multi-line message.</span>',
            'Custom Information Message', {enableHTML: true, toastLife: 5000});
    }
}
