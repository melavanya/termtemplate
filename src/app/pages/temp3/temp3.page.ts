import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { AppService } from 'src/app/app.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-temp3',
  templateUrl: './temp3.page.html',
  styleUrls: ['./temp3.page.scss'],
})
export class Temp3Page implements OnInit {

  options: string[] = ['990156', '987654', '978654', '985643','976543'];
  filteredOptions: Observable<string[]>;
  requestForm: FormGroup;

  constructor(public appService: AppService, private formBuilder: FormBuilder, private _snackBar: MatSnackBar) {
    this.requestForm = formBuilder.group({
      empReportsTo: new FormControl(),
      empName: new FormControl(),
      empID: new FormControl(),
      reason: new FormControl(),
      empEndDate: new FormControl()
    });
   }

  ngOnInit() {
    this.filteredOptions = this.requestForm.controls['empID'].valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  private _filter(value: string): string[] {
    const filterValue = value;
    return this.options.filter(option => option.indexOf(filterValue) === 0);
  }
  sendRequest() {
    let data = this.requestForm.value;
    data.empEndDate = this.requestForm.value.empEndDate.toDateString();
    data.approved = 'requested';
    this.appService.submitTerminationRequest(data);
    this.requestForm.reset();
    this._snackBar.openFromComponent(RequestComponent, {
      duration: 2000,
    });
  }
  
}

@Component({
  selector: 'request-component',
  templateUrl: './request-snack-bar.html',
  styles: [`
    .request {
      color: hotpink;
    }
  `],
})
export class RequestComponent {}