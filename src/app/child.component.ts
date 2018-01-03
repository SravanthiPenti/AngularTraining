import {Component} from '@angular/core';
@Component({
selector:'child',
template:`<h5>{{msgTitle}}</h5>
<h6>{{msg}}</h6>`,
})
export class ChildComponent{
msgTitle:string='defaultmsgtitle';
msg:string='default msg';

}