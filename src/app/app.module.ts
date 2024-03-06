import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent} from './app.component';

import { MyCalculatorModule } from './calculator/my-calculator.module';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './components/navigation/navigation.component';
import { myEmptyPage } from './components/empty-route/empty-route.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    myEmptyPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MyCalculatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



