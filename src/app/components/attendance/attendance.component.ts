import { Component, OnInit } from '@angular/core';
import { AttendanceViewModel } from '@app/models/view-models/attendance.view.model';
import { AttendanceService } from '@app/services/attendance.service';
import { AttendanceModel } from '@app/models/attendance.model';
import { DataService } from '@app/services/dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  public vm: AttendanceViewModel = new AttendanceViewModel();
  userName: string = '';
  constructor(private route: Router,
    private attendanceService: AttendanceService,
    private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.userName = this.activatedRoute.snapshot.queryParamMap.get('userName')
    let employee = this.activatedRoute.snapshot.params
    this.vm.attendnce.userName = this.userName
    this.vm.attendnce.employeeId = employee.id;
    this.attendanceService.getAttendances(this.userName).subscribe((res: any) => {
      this.vm.aaaa = res;
    })
  }

  submit(res: AttendanceModel) {
    let totalTime = this.attendanceService.timeDuration(res.inTime, res.outTime);
    this.vm.attendnce.inTime = res.inTime;
    this.vm.attendnce.date = res.date;
    this.vm.attendnce.outTime = res.outTime;
    this.vm.attendnce.totalWorkingHours = parseInt(totalTime)
    this.vm.attendnce.totalWorkingHrs = parseInt(totalTime) < 2 ? totalTime + ' Hour' : totalTime + ' Hours';
    this.addAttendance(this.vm.attendnce)
  }

  addAttendance(res: AttendanceModel) {
    if (res.date.length > 0 && res.inTime.length > 0 && res.outTime.length > 0) {
      this.attendanceService.postAttendance(res).subscribe(response => {
        this.route.navigate(['customers'])
      })
    } else {
      // this.openSnackBar("Enter all fields", 'ok')
      this.errorData(res);
    }
  }

  errorData(res: any) {
    if (res.date.length == 0 && res.inTime.length == 0 && res.outTime.length == 0) {
      this.openSnackBar("Enter all fields", 'ok')
    }
    else {
      if (res.date.length == 0) {
        this.openSnackBar("Enter Date", 'ok')
      } else if (res.inTime.length == 0) {
        this.openSnackBar("Enter In Time", 'ok')
      } else if (res.outTime.length == 0) {
        this.openSnackBar("Enter Out Time", 'ok')
      }
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
