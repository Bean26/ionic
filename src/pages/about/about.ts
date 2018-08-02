import { Component } from '@angular/core';
import { NavController , ViewController } from 'ionic-angular';


@Component({
  template: `
    <ion-content>
      <h1>My PopoverPage</h1>
      <button ion-button (click)="pushPage()">Call pushPage</button>
     </ion-content>
    `
})
export class AboutPage {
  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController
  ) { }

  pushPage() {
    // this.viewCtrl.dismiss();
    this.navCtrl.push('NetPage');
  }
}