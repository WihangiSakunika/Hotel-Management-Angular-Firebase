import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase ,AngularFireList} from '@angular/fire/compat/database'

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(
    private Fb: AngularFireDatabase
  ) { }
    bookingList !: AngularFireList<any>;

  form = new FormGroup({
    $key: new FormControl(),
    checkIn: new FormControl('',Validators.required),
    checkOut: new FormControl('',Validators.required),
    NoRooms: new FormControl('',Validators.required),
    RoomType: new FormControl('',Validators.required),
    Adult: new FormControl('',Validators.required),
    Childern: new FormControl('',Validators.required),
    FirstName: new FormControl('',Validators.required),
    LastName: new FormControl('',Validators.required),
    email: new FormControl('',Validators.email),
    ContactNumber: new FormControl('',[Validators.required,Validators.minLength(9)]),
  });

  getBooking(){
    this.bookingList=this.Fb.list('booking');
    return this.bookingList.snapshotChanges();
  }
  insertBooking(booking: any){
    this.bookingList.push({
    checkIn:booking.checkIn,
    checkOut:booking.checkOut,
    NoRooms: booking.NoRooms,
    RoomType: booking.RoomType,
    Adult: booking.Adult,
    Childern: booking.Childern,
    FirstName: booking.FirstName,
    LastName: booking.LastName,
    email: booking.email,
    ContactNumber: booking.ContactNumber
    });
  }
  populateForm(booking:any){
    this.form.setValue(booking);
  }
  updateBooking(booking:any){
    this.bookingList.update(booking.$key,{
    checkIn:booking.checkIn,
    checkOut:booking.checkOut,
    NoRooms: booking.NoRooms,
    RoomType: booking.RoomType,
    Adult: booking.Adult,
    Childern: booking.Childern,
    FirstName: booking.FirstName,
    LastName: booking.LastName,
    email: booking.email,
    ContactNumber: booking.ContactNumber
    });
  }

  deleteBooking($key:string){
    this.bookingList.remove($key);
  }
}
