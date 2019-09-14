import { Component, OnInit } from '@angular/core';
import { AttendanceViewModel } from '@app/models/view-models/attendance.view.model';
import { AttendanceService } from '@app/services/attendance.service';
import { AttendanceModel } from '@app/models/attendance.model';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  public vm: AttendanceViewModel = new AttendanceViewModel();

  constructor(private attendanceService: AttendanceService) { }

  ngOnInit() {
    this.attendanceService.getAttendances().subscribe(response => {
      console.log(response);
    })
    this.vm.attendnce.employeeId
    this.vm.attendnce.inTime
    this.vm.attendnce.outTime
    this.vm.attendnce.totalWorkingHrs
  }

  submit(res: AttendanceModel) {
    let totalTime = this.attendanceService.timeDuration(res.inTime, res.outTime)
    this.vm.attendnce.employeeId = res.employeeId;
    this.vm.attendnce.inTime = res.inTime;
    this.vm.attendnce.outTime = res.outTime;
    this.vm.attendnce.totalWorkingHrs = totalTime;
    // this.attendanceService.postAttendance(this.vm.attendnce).subscribe(response => {
    //   this.vm.attendnce = this.vm.aaaa
    // })
    // this.attendanceService.postById(this.vm.attendnce).subscribe((res:any) => {
    //   console.log(res);
      
    // })
  }
}
