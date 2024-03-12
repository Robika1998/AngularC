import { ChildComponent } from './../../../lifecycle/components/child/child.component';
import { ChildDecoratorComponent } from './../child-decorator/child-decorator.component';
import { ElementRef, QueryList, TemplateRef, ViewChildren } from '@angular/core';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';


@Component({
    selector: 'app-decorators-page',
    templateUrl: './decorators-page.component.html',
    styleUrl: './decorators-page.component.scss'
})

export class DecoratorsPageComponent implements AfterViewInit {

    public arr = [1, 2, 3, 4, 5];

    public isShow = true;

    @ViewChild('paragraph') paragraph?: ElementRef<HTMLParagraphElement>;
    @ViewChild('paragraphTemplate') paragraphTemplate?: TemplateRef<HTMLParagraphElement>;
    @ViewChild(ChildDecoratorComponent) childComponent?: ChildDecoratorComponent;

    @ViewChildren(ChildDecoratorComponent) childComponents: QueryList<ChildDecoratorComponent>;

    public ngAfterViewInit(): void {
        // console.log(this.paragraph);
        // console.log(this.paragraphTemplate);
        // console.log(this.childComponent);

        // console.log(this.childComponents);
    }


}