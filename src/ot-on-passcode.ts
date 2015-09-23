import {Directive, EventEmitter} from 'angular2/angular2';

@Directive({
  selector: '[ot-on-passcode]',
  properties: [
    "modal: modal"
  ],
  events: [
    'successCallback: authorize'
  ],
  host: {
    '(click)': 'checkModal($event)'
  }
})
export class OtOnPasscode {
  modal: any;
  successCallback: EventEmitter = new EventEmitter();

  constructor() {
  }

  checkModal(event: any) {
    event.preventDefault();
    this.modal.checkModal(this.successCallback);
  }  

}