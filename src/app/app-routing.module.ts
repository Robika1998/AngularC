import { DirectivesPageComponent } from './directives/directives.component';
import { NgModule, Directive } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyCalculatorComponent } from './calculator/components/my-calculator/my-calculator.component';
import { myEmptyPage } from './components/empty-route/empty-route.component';

const routes: Routes = [
    {
        path: 'calculator',
        component: MyCalculatorComponent
    },
    {
        path: '', redirectTo: 'calculator', pathMatch: 'full'
    },
    {
        path: 'object-list',
        loadChildren: () => import('./object-list/object-list.module').then((m) => m.MyObjectListModule)
    },
    {
        path: 'directives',
        loadChildren: () => import('./directives/directives.module').then((m) => m.DirectivesModule)
    },
    {
        path: '**',
        component: myEmptyPage
    }
    
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }