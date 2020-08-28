import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { Temp2PageRoutingModule } from './temp2-routing.module';

import { Temp2Page, DetailsModal } from './temp2.page';

import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    Temp2PageRoutingModule,
    SharedModuleModule
  ],
  declarations: [Temp2Page, DetailsModal]
})
export class Temp2PageModule {}
