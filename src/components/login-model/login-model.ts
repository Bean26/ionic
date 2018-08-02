import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
/**
 * Generated class for the LoginModelComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'login-model',
  templateUrl: 'login-model.html'
})
export class LoginModelComponent {
  @Input('data') data: string;

  text: string;
 
  constructor(public navCtrl: NavController, ) {
    console.log('Hello LoginModelComponent Component');
    this.text = 'Hello World';
  }
  toLoginPage() {
    this.navCtrl.push('LoginPage')
  }
}
