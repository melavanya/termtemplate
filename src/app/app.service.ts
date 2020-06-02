import { Injectable } from '@angular/core';
import { EmployeeData, EmployeeDetails, TerminationProcessDetils, StepDetails, StepData } from './table-data';
import { Observable, of } from 'rxjs';


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
    this.employeeData.forEach(employee => {
      this.terminationProcessDetails.forEach(empDetail => {
        if (employee.empID === empDetail.empID) {
          if (empDetail.stepID.length !== 0) {
            employee.status.status = 'In Progress';
            employee.status.color = 'primary';
          }
          if (empDetail.stepID.length === this.stepData.length) {
            employee.status.status = 'Complete';
            employee.status.color = 'accent';
          }
        }
      });
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
    return this.getEmployees();
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
    return this.getEmployees();
  }
}
