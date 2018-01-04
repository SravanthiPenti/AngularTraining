import {Component} from '@angular/core';
@Component({
    selector:'practice',
    template:`<h1>Welcome</h1>
    <img bind-src=imageUrl>
    
    <button on-click='onSave()'>click</button>
    `

})
export class PracticeComponent{
    isUsed:boolean=false;
    imageUrl:string="./assets/download.jpeg";
    onSave()
    {
        alert("Haiii");
    }

}