import { NgModule } from '@angular/core';
import { BaseModelComponent } from './base-model/base-model';
import { LoginModelComponent } from "./login-model/login-model";
@NgModule({
	declarations: [BaseModelComponent, LoginModelComponent],
	imports: [],
	exports: [BaseModelComponent, LoginModelComponent]
})
export class ComponentsModule {}
