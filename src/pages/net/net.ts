import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpProvider } from '../../providers/http/http';
import 'rxjs/add/operator/timeout';
/**
 * Generated class for the NetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-net',
  templateUrl: 'net.html',
})
export class NetPage {
  listData: Object;
  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NetPage');
    this.http.get('http://jsonplaceholder.typicode.com/users')
      .subscribe((res) => {
        this.listData = res;
        console.log(res)
      }, fail => {
        // console.log('网络错误');
        alert('网络错误')
      });
  }
}
