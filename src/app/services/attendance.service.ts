import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AttendanceModel } from '@app/models/attendance.model';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { RestApiConstComponent } from 'rest-api-const.component';
import { HomepageModel } from '@app/models/homepage.model';


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
    let request = {
      date: moment(res.date).format("DD MMM YYYY"),
      inTime : moment(res.inTime, "HH:mm:ss ").format("HH:mm A"),
      outTime: moment(res.outTime, "HH:mm:ss ").format("HH:mm A"),
      totalTime : res.totalWorkingHrs
    }
    return this.http.post<AttendanceModel>(`${this.baseUrl}/` + res.userName, request, this.httpOptions)
  }

  getAttendances(res : string): Observable<AttendanceModel> {
    return this.http.get<AttendanceModel>(`${this.baseUrl}/`+ res)
  }

  timeDuration(startTime: any, endTime: any) {
    let mins = moment.utc(moment(endTime, "HH:mm:ss ").diff(moment(startTime, "HH:mm:ss"))).format("HH ")
    return mins;
  }

  attendanceData(response:any){
    let list : Array<HomepageModel> = new Array<HomepageModel>();
    response.forEach((item: any) => {
      let obj = new HomepageModel();
      // obj.employeeId = item.employeeId
      obj.date = item.date
      obj.inTime = item.inTime
      obj.outTime = item.outTime
      obj.totalWorkingHrs = item.totalTime
      // obj.userName = item.userName
      // obj.avgWorkingHrs = item.avgWorkingHrs
      
      list.push(obj)
    });
    return list;
  }

  clearAttendanceData(res:string,id:number){
    return this.http.delete(`${this.baseUrl}/` + res+'/'+id)
  }

  validDate(){
    
  }
}
