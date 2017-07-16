/**
 * New typescript file
 */
import { Component , Input} from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'hero-child',
  template: '<h3>{{hero.name}} says:</h3> <p>I, {{hero.name}}, am at your service, {{masterName}}.</p>',
  styles : ['h3{color : orange}', ':host{color:red}']
})
  
export class HeroChildComponent{
  @Input() hero: Hero;
  @Input('master_name') masterName : string;
}