import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrls: ['./rooms-booking.component.css']
})
export class RoomsBookingComponent implements OnInit {

  loading:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  loading$!:Observable<boolean>;

  // submitted !:boolean;
  // formControls = this.BookingService.form.controls;
  // showSuccessMessage !: boolean;

  customForm!:FormGroup
  customerList: any[] = [];
  isUpdate:boolean=false;
  selectedId!:string;

  constructor(
    public BookingService : BookingService,
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    //this.loading$=this.loading.asObservable();
    this.initForm();
    this.getList();
  }
  // onSubmit(){
  //   this.submitted=true;
  //   if(this.BookingService.form.valid){
  //     if (this.BookingService.form.get('$key')?.value == null)
  //       this.BookingService.insertBooking(this.BookingService.form.value);
  //     // else
  //     // this.BookingService.updateBooking(this.BookingService.form.value);
  //       this.showSuccessMessage = true;
  //       setTimeout(()=>this.showSuccessMessage=false,3000);
  //     this.submitted=false;
  //     this.BookingService.form.reset();
  //   }
  // }

  initForm(): void {
    this.customForm = this.fb.group({
      $key: [],
    checkIn: ['',Validators.required],
    checkOut: ['',Validators.required],
    NoRooms: ['',Validators.required],
    RoomType: ['',Validators.required],
    Adult: ['',Validators.required],
    Childern: ['',Validators.required],
    FirstName: ['',Validators.required],
    LastName: ['',Validators.required],
    email: ['',Validators.email],
    ContactNumber: ['',Validators.required,Validators.minLength(9)],
    });
  }

    onSaveOrUpdate(): void {
      if (this.customForm.invalid){
        alert('Please fill required fields');
        return;
    }
    this.loading.next(true);

    if(this.isUpdate){
  //Update Record
  this.BookingService.update(this.customForm.value,this.selectedId).subscribe(res=>{
         this.getList();
         this.loading.next(false);
         alert('Record has been updated.');

  });

    }else{
  //Save Record
      this.BookingService.create(this.customForm.value).subscribe(res=>{
        this.customForm.reset();
        this.getList();
        this.loading.next(false);
      },error =>{
        alert('Error occured when saving data.\n' + error);
      },()=>{
        console.log('completed');
      })
      }
    }
      getList():void{
        this.BookingService.getAll().subscribe(res => {
          this.customerList = res;
        } );
      }
      onUpdate(customer:any):void{
        this.isUpdate=true,
        //this.selectedId=customer.id,

        this.customForm.patchValue({
          firstName:customer.firstName,
          lastname:customer.lastName,
          dob:customer.dob,
          contactNo:customer.contactNo,
          address:customer.address
        });
      }

  onDelete(id:string):void{
    let isConfirm : boolean=confirm('Are you want to delete this Record?');

    if(isConfirm){
      this.BookingService.delete(id).subscribe(res =>{
        console.log(res);
        this.getList();
    })
  }
  }




}
