import {Component, View, NgIf, Injectable} from 'angular2/angular2';
import * as Rx from 'rx';

@Component({
  selector: 'ot-overlay',
  properties: ["isOpen: is-open"]
})
@View({
  template: `
    <div class="overlay" *ng-if="isOpen" (click)="close()"></div>    
  `,
  directives: [NgIf]
})
@Injectable()
export class OtOverlay {
  isOpen: boolean = false;
  state: any;

  constructor() {
    this.state = new Rx.Subject();
    this.state.onNext(this.isOpen);
  }

  update(bool:boolean) {
    this.isOpen = bool;
    this.state.onNext(bool);
  }

  open() {
    this.update(true)
  }

  close() {
    this.update(false)
  }

}
