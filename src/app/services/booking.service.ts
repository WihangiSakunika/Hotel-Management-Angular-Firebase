import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase ,AngularFireList} from '@angular/fire/compat/database'
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private http: HttpClient
  ) { }


  // form = new FormGroup({
  //   $key: new FormControl(),
  //   checkIn: new FormControl('',Validators.required),
  //   checkOut: new FormControl('',Validators.required),
  //   NoRooms: new FormControl('',Validators.required),
  //   RoomType: new FormControl('',Validators.required),
  //   Adult: new FormControl('',Validators.required),
  //   Childern: new FormControl('',Validators.required),
  //   FirstName: new FormControl('',Validators.required),
  //   LastName: new FormControl('',Validators.required),
  //   email: new FormControl('',Validators.email),
  //   ContactNumber: new FormControl('',[Validators.required,Validators.minLength(9)]),
  // });

  // getBooking(){
  //   this.bookingList=this.Fb.list('booking');
  //   return this.bookingList.snapshotChanges();
  // }
  // insertBooking(booking: any){
  //   this.bookingList.push({
  //   checkIn:booking.checkIn,
  //   checkOut:booking.checkOut,
  //   NoRooms: booking.NoRooms,
  //   RoomType: booking.RoomType,
  //   Adult: booking.Adult,
  //   Childern: booking.Childern,
  //   FirstName: booking.FirstName,
  //   LastName: booking.LastName,
  //   email: booking.email,
  //   ContactNumber: booking.ContactNumber
  //   });
  // }
  // populateForm(booking:any){
  //   this.form.setValue(booking);
  // }
  // updateBooking(booking:any){
  //   this.bookingList.update(booking.$key,{
  //   checkIn:booking.checkIn,
  //   checkOut:booking.checkOut,
  //   NoRooms: booking.NoRooms,
  //   RoomType: booking.RoomType,
  //   Adult: booking.Adult,
  //   Childern: booking.Childern,
  //   FirstName: booking.FirstName,
  //   LastName: booking.LastName,
  //   email: booking.email,
  //   ContactNumber: booking.ContactNumber
  //   });
  // }

  // deleteBooking($key:string){
  //   this.bookingList.remove($key);
  // }
  create(customer: any): Observable<any>{
    //return this.http.post(`${this.baseAPIUrl}/customer.json`,customer);
    // const headers : HttpHeaders =  new HttpHeaders()
    // .set('content-type', 'application/json')
    // .set('Access-Control-Allow-Origin', '*')
    return this.http.post(`${environment.baseAPIUrl}/customer.json`,customer);
  }

  getAll(): Observable<any>{
    //return this.http.get(`${this.baseAPIUrl}/customer.json`).pipe(map((res) => {
    return this.http.get(`${environment.baseAPIUrl}/customer.json`).pipe(map((res) => {
      const custom:any[] = [];
      // for(const key in res){
      //   if(res.hasOwnProperty(key)){
      //     custom.push({...res[key], id: key});
      //   }
      // }
      return custom;
    }));
  }

  update(customer: any, id: string): Observable<any>{
    //return this.http.put(`${this.baseAPIUrl}/customer/${id}.json`,customer);
    return this.http.put(`${environment.baseAPIUrl}/customer/${id}.json`,customer);
  }

  delete(id: string): Observable<any>{
    //return this.http.delete(`${this.baseAPIUrl}/customer/${id}.json`);
    return this.http.delete(`${environment.baseAPIUrl}/customer/${id}.json`);
  }

}
