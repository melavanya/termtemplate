import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { Temp3PageRoutingModule } from './temp3-routing.module';

import { Temp3Page, RequestComponent } from './temp3.page';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    Temp3PageRoutingModule,
    SharedModuleModule
  ],
  declarations: [Temp3Page, RequestComponent]
})
export class Temp3PageModule {}
