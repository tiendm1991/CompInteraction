import { AdBannerComponent } from './ad-baner.component';
import { AdDirective } from './ad.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AstronautComponent } from './astronaut.component';
import { CountdownParentComponent } from './countdown-parent.component';
import { CountdownTimerComponent } from './countdown-timer.component';
import { HeroChildComponent } from './hero-child.component';
import { HeroJobAdComponent } from './hero-job-ad';
import { HeroParentComponent} from './hero-parent.compenent';
import { HeroProfileComponent } from './hero-profile.component';
import { HighlightDirective } from './highlight.component';
import { MissionControlComponent } from './missioncontrol.component';
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
  CountdownTimerComponent,
  MissionControlComponent,
  AstronautComponent,
  HighlightDirective,
  AdBannerComponent,
  HeroJobAdComponent,
  HeroProfileComponent,
  AdDirective
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
