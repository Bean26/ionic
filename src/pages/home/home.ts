import { Component } from '@angular/core';
import { NormalLoadPage } from '../normal-load/normal-load';
import { NavController, Events } from 'ionic-angular';

// 装饰器的用法，意思就是将此文件和home.html绑定了
@Component({ selector: 'page-home', templateUrl: 'home.html' })


export class HomePage {
  myvalue: string = "wangbin";
  myHero = 'Windstorm1';
  title: string = '';  // 后面string 表示此变量类型是string
  isShown: boolean = true;
  names: string[] = ['张三', '李四', '王二'];
 
  constructor(public navCtrl: NavController, public events:Events) {
    console.log("HomePage constructor");
   }

  onChangeTitle() {
    console.log('HomePage');
    this.title = "Home";
  }
 
  toLazyLoadPage() {
    this.navCtrl.push( 'LazyLoadPage' , {
      name: 'ionic',
      age: 18
    });
  }
  toNormalLoadPage() {
    this.navCtrl.push(NormalLoadPage, {
      name: 'handbook',
      age: 20
    });
  }
  toNetPage() {
    this.navCtrl.push('NetPage');
  }
  toLoginPage() {
    this.navCtrl.push('LoginPage')
  }


  ionViewDidLoad() {
    console.log('HomePage ionViewDidLoad');
    this.events.subscribe('changeTitle', (title) => {
      this.title = title;
    });
  }

  ionViewWillUnload() {
    console.log('HomePage ionViewWillUnload');
    this.events.unsubscribe('changeTitle', () => {
      console.log('取消订阅changeTitle事件');
    });
  
  }

 
}
