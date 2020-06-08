import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Temp1PageRoutingModule } from './temp1-routing.module';
import { Temp1Page } from './temp1.page';
import { TerminationProcessComponent, DetailsModal } from './termination-process/termination-process.component';
import { TerminationRequestComponent, ApprovalModal } from './termination-request/termination-request.component';
import { TerminationStepsComponent, AddNewStepModal } from './termination-steps/termination-steps.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Temp1PageRoutingModule,
    MatCheckboxModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule,
    MatTabsModule,
    MatSlideToggleModule, 
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [  
    MatDatepickerModule,
    MatNativeDateModule  
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
