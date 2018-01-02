import {Component,Input,Output} from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
    selector:'data',
    template:`<h5>Name:<span style="color:green">{{name}}</span></h5>
    <h5>City:<span style="color:green">{{city}}</span></h5>
    <h5>Salary:<span style="color:green">{{salary}}</span></h5>
    <button (click)="setRecord()">Select</button>
    <hr>`,
})
export class DataComponent{
@Input() name:string;
@Input() city:string;
@Input() salary:number;
@Output() send:EventEmitter<any>=new EventEmitter();
public setRecord()
{
    let selectRecord:any={
        sname:this.name,
        scity:this.city,
        ssalary:this.salary

    }
    this.send.emit(selectRecord);
}

}