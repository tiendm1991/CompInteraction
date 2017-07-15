/**
 * New typescript file
 */
import { Component , OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'countdown-timer',
  template: '<p>{{message}}</p>'
})

export class CountdownTimerComponent implements OnInit, OnDestroy{  intervalId = 0;
  message = '';
  seconds = 11;
  clearTimer(){
    clearInterval(this.intervalId);
  }
  ngOnInit(){
//    this.start();
  }
  ngOnDestroy(): void {    this.clearTimer();  }  
  start(){
    this.countDown();
  }
  
  stop(){
    this.clearTimer();
    this.message = `holding at T-${this.seconds} second`;
  }
  
  countDown(){
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if(this.seconds === 0){
        this.message = 'Stop Program!';
      }else{
        if(this.seconds < 0) { 
          this.seconds = 10;
        }
        this.message = `T-${this.seconds} second and counting`
      }
    },1000);
  }
}