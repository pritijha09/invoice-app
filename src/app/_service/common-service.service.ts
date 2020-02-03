import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(public http: HttpClient) { }

  // loginService(endpoint:string, body) {
  //   debugger
  //   return this.http.post(`${environment.api_base_url}${endpoint}`, body);
  // }
}
