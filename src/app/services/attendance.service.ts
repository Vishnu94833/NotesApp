import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AttendanceModel } from '@app/models/attendance.model';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { TimespentModel } from '@app/models/timespent.model';
import { RestApiConstComponent } from 'rest-api-const.component';


@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  baseUrl = environment.apiBaseUrl

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  postAttendance(res: AttendanceModel): Observable<AttendanceModel> {
    console.log(moment(res.inTime, ["h:mm A"]).format("HH:mm A"));

    let request = {
      employeeId: res.employeeId,
      timeSpent: [
        {
          inTime: moment(res.inTime, ["h:mm A"]).format("HH:mm A"),
          outTime: moment(res.outTime, ["h:mm A"]).format("HH:mm A"),
          totalDuration: res.totalWorkingHrs
        }
      ]
    }
    return this.http.put<AttendanceModel>(`${this.baseUrl}` + 'date/' + res.employeeId, request, this.httpOptions)
  }

  getAttendances(): Observable<AttendanceModel> {
    return this.http.get<AttendanceModel>(`${this.baseUrl}` + 'date')
  }

  timeDuration(startTime: any, endTime: any) {
    let mins = moment.utc(moment(endTime, "HH:mm:ss").diff(moment(startTime, "HH:mm:ss"))).format("HH:mm:ss ")
    var duration = moment.duration(moment(endTime, "HH:mm:ss").diff(moment(startTime, "HH:mm:ss")));
    var hours = duration.asHours();
    console.log(hours);
    
    return mins;
  }

  postById(res: AttendanceModel): Observable<TimespentModel> {
    let response = {
      inTime: moment.utc(moment(res.inTime, "HH:mm:ss ")).format("HH:mm:ss A"),
      outTime: moment(res.outTime).format("dddd, MMMM Do YYYY, h:mm:ss a"),
      totalDuration: res.totalWorkingHrs
    }
    return this.http.post<TimespentModel>(`${this.baseUrl}` + 'date/' + 168901, response, this.httpOptions)

  }
}
