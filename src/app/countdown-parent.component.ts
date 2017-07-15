/**
 * New typescript file
 */
import { CountdownTimerComponent } from './countdown-timer.component';
import { Component, AfterViewInit, ViewChild } from '@angular/core';
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
export class CountdownParentComponent implements AfterViewInit{  
  @ViewChild(CountdownTimerComponent)
  private countdownTimer : CountdownParentComponent;
  
  ngAfterViewInit(): void {    setTimeout(() => this.seconds = () => this.countdownTimer.seconds, 0);  }  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }
}