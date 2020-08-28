import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { Temp1PageRoutingModule } from './temp1-routing.module';
import { Temp1Page } from './temp1.page';
import { TerminationProcessComponent, DetailsModal } from './termination-process/termination-process.component';
import { TerminationRequestComponent, ApprovalModal } from './termination-request/termination-request.component';
import { TerminationStepsComponent, AddNewStepModal } from './termination-steps/termination-steps.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';






@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    Temp1PageRoutingModule,
    SharedModuleModule,
  ],
  declarations: [Temp1Page,
    DetailsModal,
    ApprovalModal,
    AddNewStepModal,
    TerminationProcessComponent,
    TerminationRequestComponent,
    TerminationStepsComponent]
})
export class Temp1PageModule {}
