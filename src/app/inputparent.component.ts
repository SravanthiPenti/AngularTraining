import {Component} from '@angular/core';
@Component({
selector:'input-parent',
template:`<h6>Agree{{agree}}
Disagree{{disagree}}</h6>
<input-child (onVote)="setVoter($event)"[name]="voter" *ngFor="let voter of voters"></input-child>`,
})
export class InputParentComponent{ 
    agree=0;
    disagree=0;
    voters=['abc','abcd','abcde'];
    setVoter(agreed:boolean)
    {
agreed?this.agree++:this.disagree++;
    }
}