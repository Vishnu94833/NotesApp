import { Component, OnInit } from '@angular/core';
import { AttendanceViewModel } from '@app/models/view-models/attendance.view.model';
import { AttendanceService } from '@app/services/attendance.service';
import { AttendanceModel } from '@app/models/attendance.model';
import { DataService } from '@app/services/dataservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  public vm: AttendanceViewModel = new AttendanceViewModel();
  userName: string = '';
  constructor(private route: Router, private attendanceService: AttendanceService, private activatedRoute: ActivatedRoute) { }

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
    this.vm.attendnce.totalWorkingHrs = parseInt(totalTime) < 2 ? totalTime + ' Hour' : totalTime + ' Hours';
    this.addAttendance(this.vm.attendnce)
  }

  addAttendance(res: AttendanceModel) {
    this.attendanceService.postAttendance(res).subscribe(response => {
      this.route.navigate(['customers'])
    })
  }


}
