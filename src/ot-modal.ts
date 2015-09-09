import {Component, View, NgIf} from 'angular2/angular2';

@Component({
  selector: 'ot-modal'
})
@View({
  template: `
    <div class="modal" *ng-if="isOpen">
      <button class="right" (click)="close()">CLOSE</button>
      <ng-content></ng-content>
    </div>
    <div class="overlay" *ng-if="isOpen" (click)="close()"></div>    
  `,
  directives: [NgIf]
})
export class OtModal {
  isOpen: boolean = false;

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}
