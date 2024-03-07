import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.scss',
})
export class DirectivesPageComponent {
  // ngFor     გავდივართ მასივთან ან ობიექტან

  public colors: string[] = ['red', 'blue', 'green', 'yellow'];

  // ngIf          თუ არის თრუ მაშინ გამოიტანს ფოლსთან არა

  public isShow = true;

  //ngSwitch

  public currentColor: string = this.colors[0];

  // ngStyle

  public elementStyle: any = {
    color: 'red',
    opacity: 0.5,
  };

  // ngClass
}
