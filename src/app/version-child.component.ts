/**
 * New typescript file
 */
import { Component , Input, OnChanges, SimpleChange} from '@angular/core';
@Component({
  selector: 'version-child',
  template: `
    <h3>Version {{major}}.{{minor}}</h3>
    <h4>Change log:</h4>
    <ul>
      <li *ngFor="let change of changeLog">{{change}}</li>
    </ul>
  `
})
export class VersionChildComponent implements OnChanges{
  @Input() major : number;
  @Input() minor : number;
  changeLog : string[] = [];
  ngOnChanges(changes: {[PropertyKey : string] : SimpleChange}): void {    let log : string[] = [];
    for(let propName in changes){
        let changedProp = changes[propName];
        let toValue = JSON.stringify(changedProp.currentValue);
        if(changedProp.isFirstChange()){
          log.push(`Init the first change ${propName} set to ${toValue}`);
        }else{
          let fromValue = JSON.stringify(changedProp.previousValue);
          log.push(`${propName} changed from ${fromValue} to ${toValue}`);
        }
    }
    this.changeLog.push(log.join(', '));  }}