import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  loading:BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false);
  loading$:Observable<boolean> | undefined;

  contactForm !: FormGroup;
  isUpdate:boolean=false;

  constructor(
    private fb: FormBuilder,
    private toast: HotToastService,
    // private contact:ContactService ,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void{
    this.contactForm =this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      subject:['',Validators.required],
      message:['',Validators.required]
    })
  }  
  onSaveOrUpdate(): void {
    if (this.contactForm.invalid){
      alert('Please fill required fields');
      return;
  }
  this.loading.next(true);
}
}
