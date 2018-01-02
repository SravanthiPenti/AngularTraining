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
  studentRecord:any=[
    {sid:1,sname:'abc'},
    {sid:2,sname:'abcd'},
    {sid:3,sname:'abcde'},
    {sid:4,sname:'abcdef'},
    {sid:5,sname:'abcdefg'},
    {sid:6,sname:'abcdefgh'},
  ]
  public details={
  sname:'',
  scity:'',
  ssalry:''
  };
  public getRecord(data:any)
  {
this.details=data;

  }
  // public studentDetails={
  // stuid:'',
  // stuname:''
  // };
  // public getStudentRecord(stu:any)
  // {
  //   this.studentDetails=stu;
  // }
  public Sdetails={
  id:'',
  pname:''
  };
  public getStudnetRecord(stu:any)
  {
this.Sdetails=stu;
  }
}

