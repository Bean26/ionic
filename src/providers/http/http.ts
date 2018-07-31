import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/timeout';

@Injectable()
export class HttpProvider {

  constructor(public http: HttpClient) { }

  // get请求
  get(url) {
    return this.http.get(url).timeout(10000).catch(this.handlerError);
  }

  // post请求，request是请求参数组成的Object
  post(url, request) {
    const body: string = JSON.stringify(request);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(url, body, httpOptions).timeout(10000).catch(this.handlerError);
  }

  private handlerError(error: Response | any) {
    const body = error.json() || {};
    return Observable.throw(body);
  }
}