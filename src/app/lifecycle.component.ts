import {Component} from '@angular/core';
@Component({
selector:'lifecycle',
template:`Enter Text:<input type="text" [(ngModel)]="userText">
<br>
<exapmple [simpleName]="userText"></exapmple>
`,
})
export class LifecycleComponent{
userText:string="abadwah";

}