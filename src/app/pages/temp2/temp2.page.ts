import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { EmployeeDetails } from '../../table-data';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-temp2',
  templateUrl: './temp2.page.html',
  styleUrls: ['./temp2.page.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class Temp2Page implements OnInit {

  @ViewChild('paginator1', { static: true }) paginator1: MatPaginator;
  @ViewChild('paginator2', {static: true }) paginator2: MatPaginator;

  displayedColumns: string[] = ['empName', 'empID', 'empJobTitle', 'empReportsTo','empEndDate'];
  dataSource1 = new MatTableDataSource<EmployeeDetails>();
  login: string = 'HR';
  employees: EmployeeDetails[] = [];
  allStepDetails: Array<any> = [];
  loginStepDetails: Array<any> = [];
 

  //expansion details

  displayColumns: string[] = ['select','stepDesc','activity','completedBy'];
  dataSource2 = new MatTableDataSource<any>();
  selectedSteps = [];

  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
  expandedElement: any;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.createTable();
  }
  createTable() {
    this.appService.getEmployees().subscribe(employees => this.employees = employees);
    this.appService.getStepDetails().subscribe(stepDetails => this.allStepDetails = stepDetails);

    if (this.login === 'SUPER') {
      this.loginStepDetails = this.allStepDetails;
    } else {
      this.allStepDetails.forEach(step => {
        if (step.dept === this.login) {
          this.loginStepDetails.push(step);
        }
      });
     
    }
    this.dataSource1.data = this.employees;
    this.dataSource1.paginator = this.paginator1;
}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();
  }
  
  loginChange() {
    this.loginStepDetails = [];
    this.expandedElement = null;
    if (this.login === 'SUPER') {
      this.loginStepDetails = this.allStepDetails;
      this.displayedColumns = ['empName', 'empID', 'empJobTitle', 'empReportsTo','empEndDate','status'];
    } else {
      this.allStepDetails.forEach(step => {
        if (step.dept === this.login) {
          this.loginStepDetails.push(step);
        }
      });
      this.displayedColumns = ['empName', 'empID', 'empJobTitle', 'empReportsTo','empEndDate'];
    }
  }
  selectedRow(row) {
    this.expandedElement = this.expandedElement === row ? null : row;
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
    this.dataSource2.data =this.loginStepDetails;
    this.dataSource2.paginator = this.paginator2;

  }
 
  onCheck(event, row) {
    if (event.checked) {
      this.selectedSteps.push(row.stepID)
    } else {
      this.selectedSteps = this.selectedSteps.filter(item => item !== row.stepID);
    }
  }
  onSubmit(row) {
    this.expandedElement = null;
    let data = {
      empID: row.empID,
      empName: row.empName,
      stepID: this.selectedSteps,
      completedBy: '',
      activity: (new Date().getMonth() + 1) + '/' +  new Date().getDate() + '/' + new Date().getFullYear() + ' ' +  new Date().getHours() + ':' +  new Date().getMinutes()

    };
    this.appService.saveTerminationProcessDetails(data).subscribe(result => this.createTable());
  }
  onComplete(empID) {
    this.expandedElement = null;
    this.appService.completeTerminationProcessDetails(empID).subscribe(result => this.createTable());
  }
}
