import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from 'src/app/app.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {FormControl, FormBuilder, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-termination-steps',
  templateUrl: './termination-steps.component.html',
  styleUrls: ['./termination-steps.component.scss'],
})
export class TerminationStepsComponent implements OnInit {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayedColumns: string[] = ['stepDesc', 'dept', 'active'];
  dataSource = new MatTableDataSource();

  stepDetailsList: any;
  searchText: any;
  questionId: any;
  constructor(private appService: AppService, public dialog: MatDialog) { }

  ngOnInit() {
    this.createTable();
  }
  createTable() {
    this.appService.getAllStepDetails().subscribe((stepDetils: any) => this.stepDetailsList = stepDetils);
    this.dataSource.data = this.stepDetailsList;
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  saveStepStatus(stepID, status) {
    let data = {
      stepID: stepID,
      status: status.checked
    };
    this.appService.saveStepStatus(data);
  }
  addNewStep() {
    let dialogRef = this.dialog.open(AddNewStepModal, {
      width: '400px'
    });
    dialogRef.afterClosed().subscribe(() => this.createTable());
  }
}
  
  @Component({
    selector: 'add-new-step-modal',
    templateUrl: './add-new-step.html',
  })
export class AddNewStepModal {
  newstep = new FormControl();
  dept= new FormControl();
  active: boolean = false;
  constructor(private appService: AppService,public dialogRef: MatDialogRef<AddNewStepModal>) { }

  NothanksClick(): void {
    this.dialogRef.close();
  }

    saveNewStep() {
      let data = {
        stepDesc: this.newstep.value,
        select: false,
        dept: this.dept.value,
        active: this.active
      };
      this.appService.addNewStep(data);
      this.dialogRef.close();
  }
}
