import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
    selector: 'my-object-list',
    templateUrl: './object-list.component.html',
    styleUrl: './object-list.component.scss',
})

export class MyObjectListComponent {

    constructor(private router: Router, private route: ActivatedRoute) {}

    public myObjects = myObjects;
    
    public redirectTo(id: number): void {
      this.router.navigate([`${id}`], {relativeTo: this.route})
    }

}

export const myObjects: MyObject [] = [
    {
        title: 'one',
        content: 'Lorem ifebhbqwufruevyvqbfuiqryvue',
        id: 1
    },
    {
        title: 'two',
        content: 'Lorem ifebhbqwufruevyvqbfuiqryvue',
        id: 2
    },
    {
        title: 'three',
        content: 'Lorem ifebhbqwufruevyvqbfuiqryvue',
        id: 3
    },
    {
        title: 'four',
        content: 'Lorem ifebhbqwufruevyvqbfuiqryvue',
        id: 4
    },
    {
        title: 'five',
        content: 'Lorem ifebhbqwufruevyvqbfuiqryvue',
        id: 5
    }
]

export interface MyObject {
    title: string;
    content: string;
    id: number;
}