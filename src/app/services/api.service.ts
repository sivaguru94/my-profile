import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = environment.baseApiUrl;

  constructor(private readonly http: HttpClient) { 
  }


  public getEmployes(): Observable<any> {
    return this.http.get(`${this.baseUrl}\employees`);
  }

}
