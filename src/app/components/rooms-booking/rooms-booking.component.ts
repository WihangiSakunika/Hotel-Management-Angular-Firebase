import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.css']
})
export class RoomsBookingComponent implements OnInit {

  submitted !:boolean;
  formControls = this.BookingService.form.controls;
  showSuccessMessage !: boolean;

  constructor(
    public BookingService : BookingService
  ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.submitted=true;
    if(this.BookingService.form.valid){
      if (this.BookingService.form.get('$key')?.value == null)
        this.BookingService.insertBooking(this.BookingService.form.value);
      // else
      // this.BookingService.updateBooking(this.BookingService.form.value);
        this.showSuccessMessage = true;
        setTimeout(()=>this.showSuccessMessage=false,3000);
      this.submitted=false;
      this.BookingService.form.reset();
    }
  }
}
