import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  configUrl = "https://plnqfktz3l.execute-api.ap-south-1.amazonaws.com/test/resource-api";
  
  constructor(private http: HttpClient) {}

  getConfig() {
    return this.http.get(this.configUrl);
  }

  postConfig(postBody: any) {
    return this.http.post(this.configUrl, postBody, httpOptions);
  }
}
