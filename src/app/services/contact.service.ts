import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  baseAPIUrl: string = 'https://hotel-booking-system-b6c6b-default-rtdb.firebaseio.com';
  constructor(
    private http: HttpClient

  ) { }

  create(contact: any): Observable<any>{
    //return this.http.post(`${this. baseAPIUrl}/contact.json`,contact);
    // const headers : HttpHeaders =  new HttpHeaders()
    // .set('content-type', 'application/json')
    // .set('Access-Control-Allow-Origin', '*')
    return this.http.post(`${environment. baseAPIUrl}/contact.json`,contact);
  }
}
function contact(arg0: string, contact: any): Observable<any> {
  throw new Error('Function not implemented.');
}

