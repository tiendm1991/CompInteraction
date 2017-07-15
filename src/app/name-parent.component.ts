/**
 * New typescript file
 */
import { Component } from '@angular/core';

@Component({
    selector: 'name-parent',
    template: `<h2>Master controls {{names.length}} names</h2>
              <name-child *ngFor="let name of names" [setName]="name"></name-child>`
})

export class NameParentComponent{
  names = [' quach tinh ', , ' duong qua', , 'lenh ho xung '];
}