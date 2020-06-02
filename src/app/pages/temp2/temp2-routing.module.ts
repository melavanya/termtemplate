import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Temp2Page } from './temp2.page';

const routes: Routes = [
  {
    path: '',
    component: Temp2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Temp2PageRoutingModule {}
