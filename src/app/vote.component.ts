/**
 * New typescript file
 */
import { Component , Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'my-voter',
  template: `
    <h4>{{name}}</h4>
    <button (click)="vote(true)"  [disabled]="voted">Agree</button>
    <button (click)="vote(false)" [disabled]="voted">Disagree</button>
  `
})

export class VoteComponent{
  @Input() name : string;
  @Output() onVoted = new EventEmitter<boolean>(); // output must mapping with the funtion onVoted on VoteTakercomponent
  voted = false;
  
  vote(agreed : boolean){
    this.onVoted.emit(agreed);
    this.voted = true;
  }
}