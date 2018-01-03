import {Component,ViewChild} from '@angular/core';
import { ChildComponent } from './child.component';
@Component({
selector:'parent',
template:`<h4>Hello</h4>
<child></child>
<button (click)="send()">Send</button>
`,
})
export class ParentComponent{
    @ViewChild(ChildComponent) child:ChildComponent;
send()
{
    this.child.msgTitle="Welcome Message";
    this.child.msg="Hii Hello"
}
}