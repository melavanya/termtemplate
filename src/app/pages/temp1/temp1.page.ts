import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeDetails } from '../../table-data';
import { AppService } from 'src/app/app.service';


@Component({
  selector: 'app-temp1',
  templateUrl: './temp1.page.html',
  styleUrls: ['./temp1.page.scss'],
})
export class Temp1Page implements OnInit {

  displayedColumns: string[] = ['empName', 'empID', 'empJobTitle', 'empReportsTo', 'empEndDate', 'status'];
  dataSource = new MatTableDataSource<EmployeeDetails>();
  login: string = 'HR';
  employees: EmployeeDetails[] = [];
  allStepDetails: Array<any> = [];
  loginStepDetails: Array<any> = [];


  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  constructor(public dialog: MatDialog, private appService: AppService) { }

  ngOnInit() {
    this.createTable();
  }

  createTable() {
    this.dataSource.data = [];
    this.loginStepDetails = [];
    let empDetails = [];
    this.appService.getEmployees().subscribe(employees => this.employees = employees);
    this.appService.getStepDetails().subscribe(stepDetails => this.allStepDetails = stepDetails);

    if (this.login === 'SUPER') {
      this.loginStepDetails = this.allStepDetails.slice(0);
      empDetails = this.employees.slice(0);
    } else {
      this.allStepDetails.forEach(step => {
        if (step.dept === this.login) {
          this.loginStepDetails.push(step);
        }
      });
      this.employees.forEach(employee => {
        if (employee[this.login].status !== 'Complete') {
          empDetails.push(employee);
        }
      });
    }
    this.dataSource.data = empDetails;
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loginChange() {
    this.dataSource.data = [];
    this.loginStepDetails = [];
    let empDetails = [];
    if (this.login === 'SUPER') {
      this.loginStepDetails = this.allStepDetails.slice(0);
      empDetails = this.employees.slice(0);
    } else {
      this.allStepDetails.forEach(step => {
        if (step.dept === this.login) {
          this.loginStepDetails.push(step);
        }
      });
      this.employees.forEach(employee => {
        if (employee[this.login].status !== 'Complete') {
          empDetails.push(employee);
        }
      });
    }
    this.dataSource.data = empDetails;
    this.dataSource.paginator = this.paginator;
  }

  selectRow(row) {
    this.appService.getTerminationProcessDetails(row.empID).subscribe(result => {
      this.loginStepDetails.forEach(step => {
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
    let dialogRef = this.dialog.open(DetailsModal, {
      width: '600px',
      data: { row: row, steps: this.loginStepDetails, login: this.login }
    });
    dialogRef.afterClosed().subscribe(() => this.createTable());
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
  login: string;
  status: string;
  constructor(
    private appService: AppService,
    public dialogRef: MatDialogRef<DetailsModal>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.empName = this.data.row.empName;
    this.empID = this.data.row.empID;
    this.login = this.data.login;
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
    this.appService.saveTerminationProcessDetails(data).subscribe(result => { });
    this.dialogRef.close();
  }
  onComplete() {
    this.appService.completeTerminationProcessDetails(this.empID).subscribe(result => { });
    this.dialogRef.close();
  }
}
