import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { RequestEmpData } from 'src/app/table-data';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-termination-request',
  templateUrl: './termination-request.component.html',
  styleUrls: ['./termination-request.component.scss'],
})
export class TerminationRequestComponent implements OnInit {
  requestedEmployees: RequestEmpData[] = [];
  displayedColumns: string[] = ['empName', 'empID', 'empReportsTo', 'empEndDate','reason', 'status'];
  dataSource = new MatTableDataSource<RequestEmpData>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(public appService: AppService, public dialog: MatDialog) { }

  ngOnInit() {
    this.createTable();
  }
  createTable() {
    this.appService.getRequestedEmployees().subscribe(employees => {
      this.requestedEmployees = employees;
    });
    this.dataSource.data = this.requestedEmployees;
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  selectRow(row) {
    let dialogRef = this.dialog.open(ApprovalModal, {
      width: '400px',
      data: row
    });
    dialogRef.afterClosed().subscribe(() => this.createTable());
  }

}

@Component({
  selector: 'approval-modal',
  templateUrl: './ApprovalModal.html',
})
export class ApprovalModal {

  empData: string;
  constructor(
    private appService: AppService,
    public dialogRef: MatDialogRef<ApprovalModal>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.empData = this.data;
  }

  ngOnInit() {
  }

  NothanksClick(): void {
    this.dialogRef.close();
  }

  onApprove() {
    this.appService.approveRequestDetails(this.empData);
    this.dialogRef.close();
  }
  onDeny() {
    this.appService.denyRequestDetails(this.empData);
    this.dialogRef.close();
  }
}
