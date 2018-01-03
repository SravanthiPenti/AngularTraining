import {Component,Input,Output,EventEmitter} from '@angular/core';
@Component({
    selector:'input-child',
    template:`<h5>Name:{{name}}</h5>
    <button (click)="vote(true)" [disabled]="voted">Agree</button>
    <button (click)="vote(false)" [disabled]="voted">Disagree</button>
    `,
})
export class InputChildComponent{
@Input() name:string;

@Output() onVote:EventEmitter<boolean>=new EventEmitter();
voted=false;
vote(agreed:boolean)
{
this.onVote.emit(agreed);
this.voted=true;
}

}