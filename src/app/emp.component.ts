import{Component} from '@angular/core';
@Component({
selector:'emp',
template:`<h3>Hello</h3>
`,
})
export class EmpComponent{
    employee:any=[{id:1}];
    constructor()
    {
        console.log(this.employee[0].id);
    }
  

}