import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountdownParentComponent } from './countdown-parent.component';
import { CountdownTimerComponent } from './countdown-timer.component';
import { HeroChildComponent } from './hero-child.component';
import { HeroParentComponent} from './hero-parent.compenent';
import { NameChildComponent } from './name-child.component';
import { NameParentComponent } from './name-parent.component';
import { VersionChildComponent } from './version-child.component';
import { VersionParentComponent } from './version-parent..component';
import { VoteComponent } from './vote.component';
import { VoteTakerComponent } from './voteTaker.component';

let directives: any[] = [
  AppComponent,
  HeroParentComponent,
  HeroChildComponent,
  NameChildComponent,
  NameParentComponent,
  VersionParentComponent,
  VersionChildComponent,
  VoteTakerComponent,
  VoteComponent,
  CountdownParentComponent,
  CountdownTimerComponent
];

let schemas: any[] = [];

@NgModule({
  declarations: directives,
  imports: [
    BrowserModule
  ],
  providers: [],
  schemas : schemas,
  bootstrap: [AppComponent]
})
export class AppModule { }
