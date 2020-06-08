import { Injectable } from '@angular/core';
import { EmployeeData, EmployeeDetails, TerminationProcessDetils, StepDetails, StepData, RequestEmpData, Job_Titles } from './table-data';
import { Observable, of } from 'rxjs';
import * as lod from 'lodash';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  initiatedEmployeeData = [];
  stepData: StepDetails[] = StepData;
  terminationProcessDetails: TerminationProcessDetils[] = [];
  requestedEmployees: RequestEmpData[] = [];
  approvedEmployees = [];

  constructor() {
    this.requestedEmployees = [
      { empName: "Jasper Kim", empID: 958761, empReportsTo: "Victor Cox", reason: "Job Abandonment", empEndDate: "Wed Jun 17 2020", approved: "approved" },
      { empName: "Kim Johnson", empID: 990871, empReportsTo: "Derek fogge", reason: "Resignation", empEndDate: "Wed Jun 17 2020", approved: "requested" }
    ];
    this.requestedEmployees.filter(employee => employee.approved === 'approved').forEach(employee => this.approvedEmployees.push(Object.assign({}, employee, {
      empJobTitle: Job_Titles[Math.floor(Math.random() * Job_Titles.length)],
      SUPER: { status: 'Pending', color: 'black' },
      initiate: false
    })));
    this.approvedEmployees.forEach(employee => {
      if (employee.SUPER.status === 'Initiated') {
        this.initiatedEmployeeData.push(Object.assign({}, employee, {
          IT: { status: 'Initiated', color: 'black' }, HR: { status: 'Initiated', color: 'black' }
        }));
      }
    });
  }

  // REQUEST FORM 

  submitTerminationRequest(data) {
    this.requestedEmployees.push(data);
    this.requestedEmployees = lod.uniqBy(this.requestedEmployees, 'empID');
    return;
  }

  // TERMINATION STEPS

  saveStepStatus(data) {
    this.stepData.forEach(step => {
      if (step.stepID === data.stepID) {
        step.active = data.status;
      }
    });
    return this.getStepDetails();
  }

  addNewStep(data) {
    this.stepData.unshift(Object.assign({}, data, { stepID: this.stepData.length + 1 }));
    this.getStepDetails();
    return this.getAllStepDetails();
  }

  getStepDetails(): Observable<StepDetails[]> {
    return of(this.stepData.filter(step => step.active));
  }
  getAllStepDetails(): Observable<StepDetails[]> {
    return of(this.stepData);
  }

  // TERMINATION REQUEST


  getRequestedEmployees(): Observable<RequestEmpData[]> {
    return of(this.requestedEmployees)
  }
  approveRequestDetails(data) {
    this.requestedEmployees.forEach(employee => {
      if (employee.empID === data.empID) {
        employee.approved = 'approved';
        this.approvedEmployees.push(Object.assign({}, employee, {
          empJobTitle: Job_Titles[Math.floor(Math.random() * Job_Titles.length)],
          SUPER: { status: 'Pending', color: 'black' },
          initiate: false
        }));
      }
    });
    return;
  }

  denyRequestDetails(data) {
    this.requestedEmployees.forEach(employee => {
      if (employee.empID === data.empID) {
        employee.approved = 'declined';
        this.approvedEmployees.splice(lod.findIndex(this.approvedEmployees, ['empID', data.empID]), 1);
      }
    });
    return;
  }
  getApprovedEmployees(): Observable<any[]> {
    return of(this.approvedEmployees)
  }
  initiateTerminationProcess(empID, status) {
    this.approvedEmployees[lod.findIndex(this.approvedEmployees, ['empID', empID])].initiate = status;
    if (status) {
      this.approvedEmployees[lod.findIndex(this.approvedEmployees, ['empID', empID])].SUPER.status = 'Initiated';
      this.initiatedEmployeeData.push(Object.assign({}, this.approvedEmployees[lod.findIndex(this.approvedEmployees, ['empID', empID])], {
        IT: { status: 'Initiated', color: 'black' }, HR: { status: 'Initiated', color: 'black' }
      }));
      
    }
    return;
  }



  getEmployees(): Observable<any[]> {
    let HRSteps = [];
    let ITSteps = [];
    this.stepData.forEach(step => {
      step.dept === 'IT' ? ITSteps.push(step.stepID) : HRSteps.push(step.stepID);
    });
    this.terminationProcessDetails.forEach(employee => {
      if (lod.isEqual(employee.stepID.filter(item => HRSteps.includes(item)).sort(), HRSteps.sort())) {
        this.initiatedEmployeeData[lod.findKey(this.initiatedEmployeeData, (emp: any) => (emp.empID === employee.empID))].HR.status = 'Complete';
        this.initiatedEmployeeData[lod.findKey(this.initiatedEmployeeData, (emp: any) => (emp.empID === employee.empID))].HR.color = 'accent';
      } else if (employee.stepID.filter(item => HRSteps.includes(item)).length !== 0) {
        this.initiatedEmployeeData[lod.findKey(this.initiatedEmployeeData, (emp: any) => (emp.empID === employee.empID))].HR.status = 'In Progress';
        this.initiatedEmployeeData[lod.findKey(this.initiatedEmployeeData, (emp: any) => (emp.empID === employee.empID))].HR.color = 'primary';
      } else {
        this.initiatedEmployeeData[lod.findKey(this.initiatedEmployeeData, (emp: any) => (emp.empID === employee.empID))].HR.status = 'Initiated';
        this.initiatedEmployeeData[lod.findKey(this.initiatedEmployeeData, (emp: any) => (emp.empID === employee.empID))].HR.color = 'black';
      }
      if (lod.isEqual(employee.stepID.filter(item => ITSteps.includes(item)).sort(), ITSteps.sort())) {
        this.initiatedEmployeeData[lod.findKey(this.initiatedEmployeeData, (emp: any) => (emp.empID === employee.empID))].IT.status = 'Complete';
        this.initiatedEmployeeData[lod.findKey(this.initiatedEmployeeData, (emp: any) => (emp.empID === employee.empID))].IT.color = 'accent';
      } else if (employee.stepID.filter(item => ITSteps.includes(item)).length !== 0) {
        this.initiatedEmployeeData[lod.findKey(this.initiatedEmployeeData, (emp: any) => (emp.empID === employee.empID))].IT.status = 'In Progress';
        this.initiatedEmployeeData[lod.findKey(this.initiatedEmployeeData, (emp: any) => (emp.empID === employee.empID))].IT.color = 'primary';
      } else {
        this.initiatedEmployeeData[lod.findKey(this.initiatedEmployeeData, (emp: any) => (emp.empID === employee.empID))].IT.status = 'Initiated';
        this.initiatedEmployeeData[lod.findKey(this.initiatedEmployeeData, (emp: any) => (emp.empID === employee.empID))].IT.color = 'black';
      }
      if (lod.isEqual(employee.stepID.filter(item => HRSteps.includes(item)).sort(), HRSteps.sort())
        && lod.isEqual(employee.stepID.filter(item => ITSteps.includes(item)).sort(), ITSteps.sort()) ) {
        this.initiatedEmployeeData[lod.findKey(this.initiatedEmployeeData, (emp: any) => (emp.empID === employee.empID))].SUPER.status = 'Complete';
        this.initiatedEmployeeData[lod.findKey(this.initiatedEmployeeData, (emp: any) => (emp.empID === employee.empID))].SUPER.color = 'accent';
      } else if (employee.stepID.filter(item => ITSteps.includes(item)).length !== 0 || employee.stepID.filter(item => HRSteps.includes(item)).length !== 0) {
        this.initiatedEmployeeData[lod.findKey(this.initiatedEmployeeData, (emp: any) => (emp.empID === employee.empID))].SUPER.status = 'In progress';
        this.initiatedEmployeeData[lod.findKey(this.initiatedEmployeeData, (emp: any) => (emp.empID === employee.empID))].SUPER.color = 'primary';
      }
    });
    return of(this.initiatedEmployeeData);
  }



  getTerminationProcessDetails(empID: number): Observable<any> {
    let steps = { empID: 0, empName: "", stepID: [], completedBy: "", activity: "" };
    this.terminationProcessDetails.forEach(empDetail => {
      if (empDetail.empID === empID) {
        steps = empDetail;
      }
    });
    return of(steps);
  }
  getAllTerminationProcessDetails(): Observable<TerminationProcessDetils[]> {
    return of(this.terminationProcessDetails);

  }
  saveTerminationProcessDetails(data) {
    let present = false;
    this.terminationProcessDetails.forEach(employee => {
      if (employee.empID === data.empID) {
        employee.stepID = [...employee.stepID, ...data.stepID];
        present = true;
      }
    });
    if (!present) {
      this.terminationProcessDetails.push(data);
    }
    this.getEmployees();
    return;
  }

  completeTerminationProcessDetails(empID) {
    this.terminationProcessDetails.forEach((employee, index) => {
      if (employee.empID === empID) {
        this.terminationProcessDetails.splice(index, 1);
      }
    });
    this.initiatedEmployeeData.forEach((employee, index) => {
      if (employee.empID === empID) {
        this.initiatedEmployeeData.splice(index, 1);
      }
    });
    this.approvedEmployees[lod.findIndex(this.approvedEmployees, ['empID', empID])].SUPER.status = 'Complete';
    this.approvedEmployees[lod.findIndex(this.approvedEmployees, ['empID', empID])].SUPER.color = 'accent';

   this.getEmployees();
    return;
  }

  loginCompleteTerminationProcessDetails(empID, login) {
    if (login === "IT") {
      this.initiatedEmployeeData[lod.findKey(this.initiatedEmployeeData, (emp: any) => (emp.empID === empID))].IT.status = 'Complete';
      this.initiatedEmployeeData[lod.findKey(this.initiatedEmployeeData, (emp: any) => (emp.empID === empID))].IT.color = 'accent';
      this.approvedEmployees[lod.findIndex(this.approvedEmployees, ['empID', empID])].SUPER.status = 'In Progress';
      this.approvedEmployees[lod.findIndex(this.approvedEmployees, ['empID', empID])].SUPER.color = 'primary';
    } else {
      this.initiatedEmployeeData[lod.findKey(this.initiatedEmployeeData, (emp: any) => (emp.empID === empID))].HR.status = 'Complete';
      this.initiatedEmployeeData[lod.findKey(this.initiatedEmployeeData, (emp: any) => (emp.empID === empID))].HR.color = 'accent';
      this.approvedEmployees[lod.findIndex(this.approvedEmployees, ['empID', empID])].SUPER.status = 'In Progress';
      this.approvedEmployees[lod.findIndex(this.approvedEmployees, ['empID', empID])].SUPER.color = 'primary';
    }
    if (this.initiatedEmployeeData[lod.findKey(this.initiatedEmployeeData, (emp: any) => (emp.empID === empID))].IT.status === 'Complete'
      && this.initiatedEmployeeData[lod.findKey(this.initiatedEmployeeData, (emp: any) => (emp.empID === empID))].HR.status === 'Complete') {
      this.completeTerminationProcessDetails(empID);
    }
    this.getEmployees();
    return;
  }

}
