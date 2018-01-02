import {Component,Input} from '@angular/core';
@Component({
    selector:'data',
    template:`<h5>Name:<span style="color:green">{{employeeName}}</span></h5>
    <h5>City:<span style="color:green">{{employeeCity}}</span></h5>
    <h5>Salary:<span style="color:green">{{employeeSalary}}</span></h5>
    <hr>`,
})
export class DataComponent{
    @Input() employeeName:string;        
    @Input() employeeCity:string; 
    @Input() employeeSalary:number; 

}