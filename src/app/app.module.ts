import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StudentComponent} from './student.component'
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import {DataComponent} from './custom/data.component'




@NgModule({
  declarations: [
    AppComponent,
  
    DataComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
