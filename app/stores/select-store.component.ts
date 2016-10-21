/**
 * Created by svet on 10/17/2016.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';

import { Store } from './store';
import { StoreService } from './store-service';
//import { EventEmitter } from "@angular/common/src/facade/async";

@Component({
    selector: 'select-store',
    moduleId: module.id,
    templateUrl: './select-store.html',
    providers: [StoreService]
})

export class SelectStore {

    @Input() isEditing : boolean;
    @Input() store : Store;
    @Input() stores : Store[];
    @Output() onSelectStore = new EventEmitter<Store>();

    /*** properties for dropDown ***/
    public disabled:boolean = false;
    public status:{isopen:boolean} = {isopen: false};

    constructor() {
    }

    public editStoreInfo(store){
        this.store = store;
        this.isEditing = true;
        this.onSelectStore.emit(this.store);
    }

    public toggled(open:boolean):void {
        console.log('Dropdown is now: ', open);
    }

    public toggleDropdown($event:MouseEvent):void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }
}