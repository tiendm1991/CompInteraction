/**
 * New typescript file
 */
import { CountdownTimerComponent } from './countdown-timer.component';
import { Component } from '@angular/core';
@Component({
  selector: 'countdown-parent-lv',
  template: `
  <h3>Countdown to Liftoff (via local variable)</h3>
  <button (click)="timer.start()">Start</button>
  <button (click)="timer.stop()">Stop</button>
  <div class="seconds">{{timer.seconds}}</div>
  <countdown-timer #timer></countdown-timer>
  `
//  styleUrls: ['demo.css']
})
export class CountdownParentComponent { }