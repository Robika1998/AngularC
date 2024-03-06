import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MyObject, myObjects } from '../list/object-list.component';


@Component({
    selector: 'selector-name',
    templateUrl: './object-item.component.html',
    styleUrl: './object-item.component.scss'
})

export class MyObjectItemComponent implements OnInit {
   
    constructor(private route: ActivatedRoute) {}

    public object?: MyObject

    ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
            this.object = myObjects[params['id'] - 1]
        })
    }
}