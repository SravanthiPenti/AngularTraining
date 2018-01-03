import {Component} from '@angular/core';
@Component({
selector:'example',
template:`<p [hidden]="!isUsed"> The sum of the Values is:{{1+1+getvalue()}}</p>

<button  [ngClass]="setValue()" [ngStyle]="setStyle()">ClickHere</button>
<button  [ngClass]="setAnother()" >ClickHere</button>
`,
styles:[`
.my_btn{border:5px solid green;border-radius:10px}
.my_btn1{border:5px solid red;border-radius:10px}
.exact{background-color:red;color:white}
.some{background-color:green;color:white}


`],


})
export class Example{
isUsed:boolean=true;
someproperty=true;
anotherproperty=true;

getvalue()
    {
        return 2;
    }
    setValue()
    {
     let classes={
         exact:this.someproperty,
         my_btn:this.someproperty
     };
        return classes;
    
    
    }
    setAnother()
    {
        let classes={
            some:this.anotherproperty,
            my_btn1:this.anotherproperty
        };
        return classes
    }
    setStyle()
    {
        let styles={
            'font-style':this.anotherproperty?'italic':'bold',

        };
        return styles;
    }
}