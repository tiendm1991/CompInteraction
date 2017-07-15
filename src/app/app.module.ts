import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroChildComponent } from './hero-child.component';
import { HeroParentComponent} from './hero-parent.compenent';
import { NameChildComponent } from './name-child.component';
import { NameParentComponent } from './name-parent.component';

let directives: any[] = [
  AppComponent,
  HeroParentComponent,
  HeroChildComponent,
  NameChildComponent,
  NameParentComponent
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
