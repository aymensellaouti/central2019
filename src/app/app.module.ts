import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ColorComponent } from './color/color.component';
import {FormsModule} from '@angular/forms';
import { TwoComponent } from './two/two.component';
import { CardComponent } from './card/card.component';
import { CarteComponent } from './carte/carte.component';
import { ListeCarteComponent } from './liste-carte/liste-carte.component';
import { CvComponent } from './cvTech/cv/cv.component';
import { DetailComponent } from './cvTech/detail/detail.component';
import { ListeComponent } from './cvTech/liste/liste.component';
import { ItemComponent } from './cvTech/item/item.component';
import { NgstyleComponent } from './directive/ngstyle/ngstyle.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    CardComponent,
    CarteComponent,
    ListeCarteComponent,
    CvComponent,
    DetailComponent,
    ListeComponent,
    ItemComponent,
    NgstyleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
