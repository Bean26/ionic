import { Component } from '@angular/core';

/**
 * Generated class for the BaseModelComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'base-model',
  templateUrl: 'base-model.html'
})
export class BaseModelComponent {

  title: string;

  constructor() {
    console.log('Hello BaseModelComponent Component');
    this.title = 'base component';
  }

}
