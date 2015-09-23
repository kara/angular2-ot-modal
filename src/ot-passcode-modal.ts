import {Component, View, FORM_DIRECTIVES, ViewQuery, QueryList} from 'angular2/angular2';
import {OtModal} from 'ot-modal';

@Component({
  selector: 'ot-passcode-modal'
})
@View({
  template: `
    <ot-modal>
      <h1 header>Modify Passcode Settings</h1>
      <form #f="form" (submit)="submit($event, f.value)">
        <label>
          <span>Enter your passcode.</span>
          <input type="text" ng-control="passcode"/>
        </label>
        <input type="submit" />
      </form>
      <ng-content></ng-content>
    </ot-modal>
  `,
  directives: [OtModal, FORM_DIRECTIVES]
})
export class OtPasscodeModal{
  isOpen: boolean = false;
  authorized: boolean = false;
  callback: any;
  modal: QueryList<OtModal>;

  constructor(@ViewQuery(OtModal) modal: QueryList<OtModal>) {
    this.modal = modal;
  }

  checkModal(callback: any) {
    this.callback = callback;

    if(this.authorized) {
      this.callback.next();
    } else {
      this.modal.first.open();
    }
  }

  submit($event: any, form: any) {
    $event.preventDefault();
    if(form.passcode === "1234") {
      this.authorized = true;
      this.callback.next();
      this.modal.first.close();
    }

  }
}
