import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  form = new FormGroup({
    userid: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
    gender: new FormControl(''),
    phone: new FormControl(''),
    dob: new FormControl('')
  })

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("HI")
    console.log(this.form.value);
  }

}
