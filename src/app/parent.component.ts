import {Component,ViewChild} from '@angular/core';
import { ChildComponent } from './child.component';
@Component({
    selector:'parent',
    template:`<child >  </child>
    <button (click)="setMsg()">SendMsg</button>
  `,

})
export class ParentComponent{
    @ViewChild(ChildComponent) child:ChildComponent;
employeeRecord:any=[{id:1,name:'abc'},
{id:2,name:'abcd'},
{id:3,name:'abce'},
{id:4,name:'abcef'},
{id:5,name:'abcefg'}];
// constructor()
// {
//     console.log(this.employeeRecord.id);
// }


   setMsg()
   {
     for(var i=0;i<this.employeeRecord.length;i++)
     {
       this.child.Name=this.employeeRecord[i].name;
       return;
    }
   
   }
   
}