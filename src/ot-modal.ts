import {Component, View, NgIf, ElementRef} from 'angular2/angular2';

@Component({
  selector: 'ot-modal'
})
@View({
  template: `
    <div class="modal" *ng-if="isOpen">
      <a class="right" (click)="close()">X</a>
      <h1>Modify Passcode Settings</h1>
      <form>
        <label>
          <span>Enter your passcode.</span>
          <input type="text" #passcode/>
        </label>
        <button (click)="submit($event, passcode)">Submit</button>
      </form>
      <ng-content></ng-content>
    </div>
    <div class="overlay" *ng-if="isOpen" (click)="close()"></div>    
  `,
  directives: [NgIf]
})
export class OtModal {
  isOpen: boolean = false;
  authorized: boolean = false;
  callback: any;
  element: ElementRef;

  checkModal(callback: any, element: ElementRef) {
    this.callback = callback;
    this.element = element;
    if(this.authorized) {
      this.callback();
    } else {
      this.open();
    }
  }

  submit($event: any, passcode: any) {
    $event.preventDefault();
    if(passcode.value === "1234") {
      this.authorized = true;
      this.callback();
      this.close();
    }

  }

  open() {
    this.isOpen = true;
  }

  close() {
    this.isOpen = false;
  }
}
