import { Component } from '@angular/core';
import {FormArray, NgForm, NgModel, Validators} from "@angular/forms";
import {FormGroup, FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  form:any;
  // emailRegex:string = "[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,}$";
  contactRegix:string = "[0-9]{10}"

  constructor() {
    this.form =new FormGroup({
      fullName: new FormControl('',[
        Validators.required,
        Validators.minLength(5)
      ]),
      email: new FormControl('',[
        Validators.required,
        // Validators.pattern(this.emailRegex)
        Validators.email
      ]),

      contactDetails:new FormGroup({
        address: new FormControl('',[Validators.required]),
        shippingAddress: new FormControl('',[Validators.required]),
        contactNo: new FormControl('',[
          Validators.required,
          Validators.pattern(this.contactRegix)
        ])
      }),

      skills: new FormArray([])

    });
  }

  // get Address(){
  //   return this.form.get('address');
  // }
  // get fullName(){
  //   return this.form.get('fullName');
  // }
  // get Email(){
  //   return this.form.get('email')
  // }


  onSubmit1(f: NgForm) {
    console.log(f.value);
  }
  //
  //
  getValue(f: NgModel) {
    console.log(f);
  }

get Skills(){
    return this.form.get('skills') as FormArray;
}

  onSubmit() {

    console.log(this.form.value)
  }

  addskills(skills: any) {
    this.Skills.push(
      new FormControl(skills.value)
    )
    skills.value = '';
    console.log(this.form.value);
  }

  // removeSkill(index: any) {
  //   this.Skills.removeAt(index);
  // }
}
