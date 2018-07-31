import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SettingPage } from "../setting/setting";
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tabRoots: Object[];

  constructor() {
    this.tabRoots = [
      {
        root: HomePage,
        tabTitle: '首页',
        tabIcon: 'home'
      },
      {
        root: ContactPage,
        tabTitle: '联系',
        tabIcon: 'notifications'
      },
      {
        root: AboutPage,
        tabTitle: '关于',
        tabIcon: 'document'
      },
      {
        root: SettingPage,
        tabTitle: '个人',
        tabIcon: 'person'

      }
    ];
  }
}
