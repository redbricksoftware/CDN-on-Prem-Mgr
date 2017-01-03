import {Component, Input} from '@angular/core';
import { CDNFile } from './cdn-file';

@Component({
    selector: 'cdn-file-detail',
    template: `
  <div *ngIf="cdnfile">
    <h2>{{cdnfile.name}} details!</h2>
    <div><label>id: </label>{{cdnfile.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="cdnfile.name" placeholder="name"/>
    </div>
  </div>
`
})

export class CDNFileDetailComponent {
    @Input()
    cdnfile: CDNFile;
}