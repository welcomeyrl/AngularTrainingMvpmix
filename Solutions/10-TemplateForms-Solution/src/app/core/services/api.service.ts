import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  get<T>(path: string, params: HttpParams = new HttpParams()): Observable<T> {
    return this.http.get<T>(path, { params: params })
      .catch(this.logError);
  }

  put(path: string, body: Object = {}): Observable<void> {
    return this.http.put(path, body)
      .catch(this.logError);
  }

  post(path: string, body: Object = {}): Observable<void> {
    return this.http.post(path, body)
      .catch(this.logError);
  }

  delete(path): Observable<void> {
    return this.http.delete(path)
      .catch(this.logError);
  }

  private logError(error: any) {
    console.log('Error Occurred: ', error);
    return Observable.throw('An Error Has Occurred!');
  }
}
