import {Component,OnInit,OnChanges,SimpleChanges,Input} from '@angular/core';
@Component({
    selector:'exapmple',
    template:`Your Entered{{simpleName}}`,
})
export class ExampleComponent implements OnChanges{
    @Input() simpleName:string;
ngOnInit()
{
    console.log("hello world");
}
ngOnChanges(change:SimpleChanges)
{
    for(let propertyName in change)
    {
 let  name=change[propertyName];
 console.log('change occured');
}
}
}