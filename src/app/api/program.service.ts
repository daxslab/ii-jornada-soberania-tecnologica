import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {
  public program: any = [];

  constructor(private http: HttpClient) { }

  getProgram(): Observable<any> {
    const call = this.http.get('assets/events.json');
    call.subscribe(result => {
      this.program = result;
    });
    return call;
  }

  filterProgram(str) {
    str = str.toLowerCase();
    return this.program.filter(item => {
      if (item.day && item.day.toLowerCase().indexOf(str) >= 0) {
        return true;
      }
      if (item.name && item.name.toLowerCase().indexOf(str) >= 0) {
        return true;
      }
      if (item.description && item.description.toLowerCase().indexOf(str) >= 0) {
        return true;
      }
      if (item.place && item.place.toLowerCase().indexOf(str) >= 0) {
        return true;
      }
      if (item.responsible && item.responsible.toLowerCase().indexOf(str) >= 0) {
        return true;
      }
      if (item.time && item.time.toLowerCase().indexOf(str) >= 0) {
        return true;
      }
    });
  }


}
