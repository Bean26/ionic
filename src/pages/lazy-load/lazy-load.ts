import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular';

/**
 * Generated class for the LazyLoadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lazy-load',
  templateUrl: 'lazy-load.html',
})
export class LazyLoadPage {

  name: string;
  age: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events:Events ) {
    this.name = this.navParams.get('name');
    this.age = this.navParams.get('age');
  }

  back() {
    this.navCtrl.pop();
  }

  sendEvent() {
    this.events.publish('changeTitle', 'ionic');
    console.log('发送成功')
  }

}
