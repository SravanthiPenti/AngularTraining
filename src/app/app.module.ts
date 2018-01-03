import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {StudentComponent} from './student.component'
import { AppComponent } from './app.component';
import {ExampleComponent}  from './example.component';
import { FormsModule } from '@angular/forms';
import {DataComponent} from './custom/data.component'
import { LifecycleComponent} from './lifecycle.component';
import {ParentComponent} from './parent.component';
import {ChildComponent} from './child.component';
import {EmpComponent} from './emp.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import {InputChildComponent} from './inputchild.component';
import {InputParentComponent} from './inputparent.component';


@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    DataComponent,
    StudentComponent,
    LifecycleComponent,
    ParentComponent,
    ChildComponent,
    EmpComponent,
    TutorialComponent,
    InputChildComponent,
    InputParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
