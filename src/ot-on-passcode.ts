import {Directive, ElementRef} from 'angular2/angular2';

@Directive({
  selector: '[ot-on-passcode]',
  host: {
    '(click)': 'checkModal($event)'
  },
  properties: [
    "successCallback: ot-on-passcode",
    "modal: use-modal"
  ]
})
export class OtOnPasscode {
  modal: any;
  element: ElementRef;
  successCallback: any;

  constructor(element: ElementRef) {
    this.element = element;
  }

  checkModal(event: any) {
    event.preventDefault();
    this.modal.checkModal(this.successCallback, this.element);
  }  

}