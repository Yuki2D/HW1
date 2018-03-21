import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FruitChoiceComponent } from './fruit-choice/fruit-choice.component';
import { StudentInfoComponent } from './student-info/student-info.component';
import { HeroComponent } from './hero/hero.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    FruitChoiceComponent,
    StudentInfoComponent,
    HeroComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
