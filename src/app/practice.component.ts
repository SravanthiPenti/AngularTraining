import {Component} from '@angular/core';
@Component({
    selector:'practice',
    template:`<h1>Welcome</h1>
    <img bind-src=imageUrl>
    
    <button on-click='onSave()'>click</button>
    <ul *ngFor="let student of studentList">
    <li>{{student?.name}}</li>
    </ul>
    <input type="text" [(ngModel)]="value" >{{value}}<br>
<ul [ngSwitch]="color">
<li *ngSwitchCase="'red'" class='text-danger'>red</li>
<li *ngSwitchCase="'green'" class='text-success'>green</li>
<li *ngSwitchCase="'black'" >black</li>
<li *ngSwitchCase="'yellow'" class='text-warning'>yellow</li>
</ul>
<example *ngIf="isDisplayed"></example>
    `

})
export class PracticeComponent{
    isUsed:boolean=false;
    color:string='yellow';
    imageUrl:string="./assets/download.jpeg";
    value="adam"
    studentList=[{name}]
    onSave()
    {
        alert("Haiii");
    }
  isDisplayed=true;

}