import {Component, Directive, View, bootstrap, TemplateRef, ViewContainerRef} from 'angular2/angular2';
import {OtPasscodeModal} from 'ot-passcode-modal';
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
        <input type="checkbox" ot-on-passcode (authorize)="showSuccess()" [modal]="firstmodal">
        <span>Block table combinations</span>
      </label>
      <label>
        <input type="checkbox" ot-on-passcode (authorize)="showSuccess()" [modal]="othermodal">
        <span>Overbook reservations</span>
      </label>
    </form>

    <ot-passcode-modal #firstmodal>
      <p>This is the modal content.</p>
    </ot-passcode-modal>

    <ot-passcode-modal #othermodal>
      <p>OTHER MODAL</p>
    </ot-passcode-modal>

  `,
  directives: [OtPasscodeModal, OtOnPasscode]
})
export class App {
  success: boolean = false;
  counter: number = 0;

  constructor() {
  }

  showSuccess() {
    this.success = true;
    this.counter++;
  }

}

bootstrap(App);