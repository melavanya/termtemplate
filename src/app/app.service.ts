import { Injectable } from '@angular/core';
import { EmployeeData, EmployeeDetails, TerminationProcessDetils, StepDetails, StepData } from './table-data';
import { Observable, of } from 'rxjs';
import * as lod from 'lodash';
import { IfStmt } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  employeeData: EmployeeDetails[] = EmployeeData;
  stepData: StepDetails[] = StepData;
  terminationProcessDetails: TerminationProcessDetils[] = [];
  
  constructor() {
    this.terminationProcessDetails = [
      {
        empID: 958761,
        empName: 'Jasper Kim',
        stepID: [1, 10],
        completedBy: 'HR',
        activity:(new Date().getMonth() + 1) + '/' +  new Date().getDate() + '/' + new Date().getFullYear() + ' ' +  new Date().getHours() + ':' +  new Date().getMinutes()
      },
      {
        empID: 919121,
        empName: 'Asher',
        stepID: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],
        completedBy: 'HR',
        activity:(new Date().getMonth() + 1) + '/' +  new Date().getDate() + '/' + new Date().getFullYear() + ' ' +  new Date().getHours() + ':' +  new Date().getMinutes()
      }
   ]
   }
   getEmployees(): Observable<EmployeeDetails[]> {
    let HRSteps = [];
    let ITSteps = [];
    this.stepData.forEach(step => {
      step.dept === 'IT' ? ITSteps.push(step.stepID) : HRSteps.push(step.stepID);
    });
    this.terminationProcessDetails.forEach(employee => {
      if (lod.isEqual(employee.stepID.filter(item => HRSteps.includes(item)).sort(), HRSteps.sort())) {
        this.employeeData[lod.findKey(this.employeeData, (emp: any) => (emp.empID === employee.empID))].HR.status = 'Complete';
        this.employeeData[lod.findKey(this.employeeData, (emp: any) => (emp.empID === employee.empID))].HR.color = 'accent';
      } else if(employee.stepID.filter(item => HRSteps.includes(item)).length !==0) {
        this.employeeData[lod.findKey(this.employeeData, (emp: any) => (emp.empID === employee.empID))].HR.status = 'In Progress';
        this.employeeData[lod.findKey(this.employeeData, (emp: any) => (emp.empID === employee.empID))].HR.color = 'primary';
      } else {
        this.employeeData[lod.findKey(this.employeeData, (emp: any) => (emp.empID === employee.empID))].HR.status = 'Initiated';
        this.employeeData[lod.findKey(this.employeeData, (emp: any) => (emp.empID === employee.empID))].HR.color = 'black';
      }
      if (lod.isEqual(employee.stepID.filter(item => ITSteps.includes(item)).sort(), ITSteps.sort())) {
        this.employeeData[lod.findKey(this.employeeData, (emp: any) => (emp.empID === employee.empID))].IT.status = 'Complete';
        this.employeeData[lod.findKey(this.employeeData, (emp: any) => (emp.empID === employee.empID))].IT.color = 'accent';
      } else if(employee.stepID.filter(item => ITSteps.includes(item)).length !==0){
        this.employeeData[lod.findKey(this.employeeData, (emp: any) => (emp.empID === employee.empID))].IT.status = 'In Progress';
        this.employeeData[lod.findKey(this.employeeData, (emp: any) => (emp.empID === employee.empID))].IT.color = 'primary';
      } else {
        this.employeeData[lod.findKey(this.employeeData, (emp: any) => (emp.empID === employee.empID))].IT.status = 'Initiated';
        this.employeeData[lod.findKey(this.employeeData, (emp: any) => (emp.empID === employee.empID))].IT.color = 'black';
      }
      if (lod.isEqual(employee.stepID.filter(item => HRSteps.includes(item)).sort(), HRSteps.sort())
        && lod.isEqual(employee.stepID.filter(item => ITSteps.includes(item)).sort(), ITSteps.sort())) {
          this.employeeData[lod.findKey(this.employeeData, (emp: any) => (emp.empID === employee.empID))].SUPER.status = 'Complete';
          this.employeeData[lod.findKey(this.employeeData, (emp: any) => (emp.empID === employee.empID))].SUPER.color = 'accent';
      } else if (employee.stepID.filter(item => ITSteps.includes(item)).length !== 0 || employee.stepID.filter(item => HRSteps.includes(item)).length !== 0) {
        this.employeeData[lod.findKey(this.employeeData, (emp: any) => (emp.empID === employee.empID))].SUPER.status = 'In progress';
          this.employeeData[lod.findKey(this.employeeData, (emp: any) => (emp.empID === employee.empID))].SUPER.color = 'primary';
      }
    });
    return of(this.employeeData);
  }

  getStepDetails(): Observable<StepDetails[]> {
    return of(this.stepData);
  }

  getTerminationProcessDetails(empID: number): Observable<any> {
    let steps = {empID: 0, empName: "", stepID:[], completedBy: "", activity: ""};
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
    this.employeeData.forEach((employee, index) => {
      if (employee.empID === empID) {
        this.employeeData.splice(index, 1);
      }
    });
    this.getEmployees();
    return;
  }
}
