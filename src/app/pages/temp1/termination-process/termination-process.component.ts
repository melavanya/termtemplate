import { Component, OnInit, ViewChild, Inject, Input,OnChanges, SimpleChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeDetails } from '../../../table-data';
import { AppService } from 'src/app/app.service';
import * as lod from 'lodash';


@Component({
  selector: 'app-termination-process',
  templateUrl: './termination-process.component.html',
  styleUrls: ['./termination-process.component.scss'],
})
export class TerminationProcessComponent implements OnInit, OnChanges {
  @Input('index') index: number;

  displayedColumns: string[] = ['initiate','empName', 'empID', 'empJobTitle', 'empReportsTo', 'empEndDate','reason', 'status'];
  dataSource = new MatTableDataSource<EmployeeDetails>();
  employees = [];
  allStepDetails: Array<any> = [];
  
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(public dialog: MatDialog, private appService: AppService) { }

  ngOnInit() {
    this.createTable();
  }
  ngOnChanges(changes: SimpleChanges) {
    this.createTable();  
  }

  createTable() {
    this.appService.getApprovedEmployees().subscribe(employees => this.employees = employees);
    this.appService.getStepDetails().subscribe(stepDetails => this.allStepDetails = stepDetails);

    this.dataSource.data = this.employees;
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  initiateProcess(empID, event) {
    this.appService.initiateTerminationProcess(empID, event.checked);
  }


  selectRow(row) {
    this.appService.getTerminationProcessDetails(row.empID).subscribe(result => {
      this.allStepDetails.forEach(step => {
        if (result.stepID.length !== 0 && result.stepID.includes(step.stepID)) {
          step.select = true;
          step.activity = result.activity;
          step.completedBy = step.dept;
        } else {
          step.select = false;
          step.activity = '';
          step.completedBy = '';
        }
      });
    });
    if (this.employees[lod.findIndex(this.employees, ['empID', row.empID])].initiate) {
      let dialogRef = this.dialog.open(DetailsModal, {
      width: '600px',
      data: { row: row, steps: this.allStepDetails }
      });
      dialogRef.afterClosed().subscribe(() => this.createTable());
    }
  }

}



@Component({
  selector: 'details-modal',
  templateUrl: './DetailsModal.html',
})
export class DetailsModal {
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayedColumns: string[] = ['select', 'stepDesc', 'activity', 'completedBy'];
  dataSource = new MatTableDataSource<any>();

  empName: string;
  empID: number;
  stepDetails: [];
  selectedSteps = [];
  status: string;
  constructor(
    private appService: AppService,
    public dialogRef: MatDialogRef<DetailsModal>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.empName = this.data.row.empName;
    this.empID = this.data.row.empID;
    this.stepDetails = this.data.steps;
    this.status = this.data.row.SUPER.status;
  }

  ngOnInit() {
    this.dataSource.data = this.stepDetails;
    this.dataSource.paginator = this.paginator;
  }

  NothanksClick(): void {
    this.dialogRef.close();
  }


  onCheck(event, row) {
    if (event.checked) {
      this.selectedSteps.push(row.stepID)
    } else {
      this.selectedSteps = this.selectedSteps.filter(item => item !== row.stepID);
    }
  }
  onSubmit() {
    let data = {
      empID: this.empID,
      empName: this.empName,
      stepID: this.selectedSteps,
      completedBy: '',
      activity: (new Date().getMonth() + 1) + '/' + new Date().getDate() + '/' + new Date().getFullYear() + ' ' + new Date().getHours() + ':' + new Date().getMinutes()
    };
    this.appService.saveTerminationProcessDetails(data);
    this.dialogRef.close();
  }
  onComplete() {
    this.appService.completeTerminationProcessDetails(this.empID);
    this.dialogRef.close();
  }
}
