import { Component, OnInit } from '@angular/core';
import { HomepageViewModel } from '@app/models/view-models/homepage.view.model';
import { ActivatedRoute } from '@angular/router';
import { AttendanceService } from '@app/services/attendance.service';
import { HomepageModel } from '@app/models/homepage.model';
import * as moment from 'moment';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  public vm: HomepageViewModel = new HomepageViewModel();

  constructor(private activatedRoute: ActivatedRoute, private attendanceService: AttendanceService) { }

  ngOnInit() {
    this.bindAttendanceData();
    console.log(moment().daysInMonth());

  }

  bindAttendanceData() {
    let userName = this.activatedRoute.snapshot.queryParamMap.get('attendanceFor')
    this.attendanceService.getAttendances(userName).subscribe(response => {
      this.vm.attendance = this.attendanceService.attendanceData(response);
      this.deleteAttendanceData(this.vm.attendance, userName)
    })
  }

  deleteAttendanceData(response: any, name: string) {
    if (response.length > moment().daysInMonth()) {
      for (let i = 1; i <= moment().daysInMonth(); i++) {
        this.attendanceService.clearAttendanceData(name, i).subscribe(res => {
          console.log(res);
        })
      }
    }
  }

}
