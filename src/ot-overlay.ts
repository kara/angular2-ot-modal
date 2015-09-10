import {Component, View, NgIf, Injectable, Host, Inject, forwardRef} from 'angular2/angular2';
import {OtModal} from 'ot-modal';

@Component({
  selector: 'ot-overlay'
})
@View({
  template: `
    <div class="overlay" *ng-if="modal.isOpen" (click)="modal.close()"></div>    
  `,
  directives: [NgIf]
})
@Injectable()
export class OtOverlay {
  isOpen: boolean = false;
  modal: OtModal;

  constructor(@Host @Inject(forwardRef(()=> OtModal)) modal: OtModal) {
    this.modal = modal;
  }

}
