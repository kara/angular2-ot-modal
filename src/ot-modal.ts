import {Component, View, NgIf} from 'angular2/angular2';
import {OtOverlay} from "ot-overlay";
import * as Rx from 'rx';

@Component({
  selector: 'ot-modal'
})
@View({
  template: `
    <div class="modal" *ng-if="isOpen">
      <button class="right" (click)="close()">CLOSE</button>
      <ng-content></ng-content>
    </div>
    <ot-overlay></ot-overlay>
  `,
  directives: [NgIf, OtOverlay]
})
export class OtModal {
  isOpen: boolean = false;

  constructor() {
  }
 
  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}
