import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, Validators, FormControl ,FormBuilder } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from "@angular/router";
import { md5 } from '../md5';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  public obj;

  constructor(public router:Router,
              private formBuilder: FormBuilder,
              private loginservice: LoginService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      usertype: ['',Validators.required]
  });
  }

  get f() { return this.loginForm.controls; }

  onSubmit()
  {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    let obs=this.loginservice.onLogin(this.f.email.value,this.f.password.value,this.f.usertype.value);
    obs.subscribe(data=>this.obj=data);
    obs.subscribe(data=>{
      if(data!=null)
      {
        let e = md5(this.f.email.value);
        console.log(e);
        if(this.f.usertype.value=="admin")
        {
          this.router.navigateByUrl("/admindashboard");
        }
        else if(this.f.usertype.value=="director")
        {
          this.router.navigateByUrl("/directordashboard");
        }
        else if(this.f.usertype.value=="faculty")
        {
          this.router.navigateByUrl("/facultydashboard");
        }
        else if(this.f.usertype.value=="student")
        {
          this.router.navigateByUrl("/studentdashboard");
        }
      }
    });
  }
}
