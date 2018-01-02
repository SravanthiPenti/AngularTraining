import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeRecord:any=[
    {ename:'a',ecity:'mumbai',esalary:50000},    
    {ename:'b',ecity:'Delhi',esalary:60000},
    {ename:'c',ecity:'Chennai',esalary:70000},
    {ename:'d',ecity:'Hyd',esalary:80000},
  ]


}
