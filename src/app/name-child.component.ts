/**
 * New typescript file
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'name-child',
  template: '<h3>"{{name}}"</h3>',
  styles : ['h3{color:green}']
})

export class NameChildComponent{
  private _name = '';
  
  @Input()
  set setName(name : string){
    this._name = (name && name.trim()) || '<no name set>';
  }
  get name():string{
    return this._name;
  }
}