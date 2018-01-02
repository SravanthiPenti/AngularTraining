import {Component,Output} from '@angular/core';
import { Input } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
selector:'employee-details',
template:`<p>Student-Id:<span style="color:red">{{studentId}}</span></p>
<p>Student-Name:<span style="color:red">{{studentName}}</span></p>
<button (click)="setStudent()">selectStudent</button>

<hr>
`,
})
export class StudentComponent{
    @Input() studentId:string;
    @Input() studentName:string;
    @Output() selectStudentRecord:EventEmitter<any>=new EventEmitter();
    public setStudent()
    {
        let studentObj:any={
       id:this.studentId,
       pname:this.studentName
        }
        this.selectStudentRecord.emit(studentObj);
    }

}