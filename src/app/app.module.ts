import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroChildComponent } from './hero-child.component';
import { HeroParentComponent} from './hero-parent.compenent';

let directives: any[] = [
  AppComponent,
  HeroParentComponent,
  HeroChildComponent
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
