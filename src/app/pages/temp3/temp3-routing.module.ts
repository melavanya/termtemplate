import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Temp3Page } from './temp3.page';

const routes: Routes = [
  {
    path: '',
    component: Temp3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Temp3PageRoutingModule {}
