import {Component, View, bootstrap} from 'angular2/angular2';
import {OtModal} from 'ot-modal';

@Component({
  selector: 'app'
})
@View({
  template: `
    <button (click)="modal.open()">OPEN MODAL</button>
    <ot-modal #modal>
      <p>This is content inside the modal.</p>
      <button (click)="modal.close()">Custom close</button>
    </ot-modal>
  `,
  directives: [OtModal]
})
export class App {

  constructor() {
  }
}

bootstrap(App);