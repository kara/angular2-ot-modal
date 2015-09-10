import {Component, View, NgIf, ViewQuery, QueryList, LifecycleEvent} from 'angular2/angular2';
import {OtOverlay} from "ot-overlay";

@Component({
  selector: 'ot-modal'
})
@View({
  template: `
    <div class="modal" *ng-if="isOpen">
      <button class="right" (click)="close()">CLOSE</button>
      <ng-content></ng-content>
    </div>
    <ot-overlay [is-open]="isOpen"></ot-overlay>
  `,
  directives: [NgIf, OtOverlay],
  lifecycle: [LifecycleEvent.onInit]
})
export class OtModal {
  isOpen: boolean = false;
  overlay: QueryList<OtOverlay>;

  constructor(@ViewQuery(OtOverlay) overlay: QueryList<OtOverlay>) {
    this.overlay = overlay;
  }

  onInit() {
    this.overlay.first.state.subscribe(function(open:boolean) {
      this.isOpen = open;
    }.bind(this));
  }
 
  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}
