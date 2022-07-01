import { Component, OnInit } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  showDeletedMessage !: boolean;
  searchText: string = "";
  constructor(private BookingService : BookingService) { }
  bookingArray = [];

  ngOnInit(): void {
  //   this.BookingService.getBooking().subscribe(
  //     list => {
  //       this.bookingArray != list.map(item => {
  //         return {
  //           $key:item.key,
  //           ...item.payload.val()
  //         };
  //       })
  //     }
  //   );
  // }

  // onDelete($key:any){
  //   if (confirm('Are you sure to delete this record ?')) {
  //     this.BookingService.deleteBooking($key);
  //     this.showDeletedMessage = true;
  //     setTimeout(() => this.showDeletedMessage = false, 3000);
  //   }
  // }
  // filterCondition(booking:any) {
  //   return booking.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  // }
//}
}}
