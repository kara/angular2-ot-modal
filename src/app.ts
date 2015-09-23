import {Component, View, bootstrap} from 'angular2/angular2';
import {OtModal} from 'ot-modal';
import {OtOnPasscode} from 'ot-on-passcode';

@Component({
  selector: 'app'
})
@View({
  template: `
    <div [hidden]="!success">
      <p>All changes saved ({{counter}})</p>
    </div>
    <form>
      <label>
        <input type="checkbox" [use-modal]="modal" [ot-on-passcode]="showSuccess"/>
        <span>Block table combinations</span>
      </label>
      <label>
        <input type="checkbox" [use-modal]="othermodal" [ot-on-passcode]="showSuccess"/>
        <span>Overbook reservations</span>
      </label>
    </form>
    <ot-modal #modal>
      <p>This is the modal content.</p>
    </ot-modal>
    <ot-modal #othermodal>
      <p>OTHER MODAL</p>
    </ot-modal>

  `,
  directives: [OtModal, OtOnPasscode]
})
export class App {
  success: boolean = false;
  counter: number = 0;

  constructor() {
  }

  get showSuccess() {
    return this._showSuccess.bind(this);
  }

  _showSuccess() {
    this.success = true;
    this.counter++;
  }

}

bootstrap(App);