import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyObjectListComponent } from './components/list/object-list.component';
import { MyObjectItemComponent } from './components/item/object-item.component';
import { CommonModule } from '@angular/common';
import { MyObjectListRouting } from './object-list-routing.module';



@NgModule({
    imports: [CommonModule, MyObjectListRouting],
    exports: [MyObjectListComponent, MyObjectItemComponent],
    declarations: [MyObjectListComponent, MyObjectItemComponent],
    providers: [],
})
export class MyObjectListModule { }
