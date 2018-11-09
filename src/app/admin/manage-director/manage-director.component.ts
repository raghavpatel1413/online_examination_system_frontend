import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, Validators, FormControl ,FormBuilder } from '@angular/forms';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-manage-director',
  templateUrl: './manage-director.component.html',
  styleUrls: ['./manage-director.component.css']
})
export class ManageDirectorComponent implements OnInit {
  managedirectorform: FormGroup;
  public obj;
  public deptobj;
  constructor(private formBuilder: FormBuilder, private adminservice: AdminService) { }

  ngOnInit() {
    this.managedirectorform = this.formBuilder.group({
      dname: ['', Validators.required],
      demail: ['', Validators.required],
      dcontact: ['', Validators.required],
      daddress: ['', Validators.required],
      gender: ['', Validators.required],
      ddob: ['', Validators.required],
      deptselect:['',Validators.required]
  });
    this.select();
  }
  get f() { return this.managedirectorform.controls; }

  onSubmit()
  {
    if (this.managedirectorform.invalid) {
      return;
    }
    this.adminservice.insertdirector(this.f.dname.value,this.f.demail.value,this.f.dcontact.value,this.f.daddress.value,this.f.gender.value,this.f.ddob.value,this.f.deptselect.value);
  }
  select(){
    let obs=this.adminservice.getdirectordata();
    obs.subscribe(data=>this.obj=data);
    obs.subscribe(data=>{console.log(data)});

    let obs2=this.adminservice.getdepartmentdata();
    obs2.subscribe(data=>this.deptobj=data);
  }
}
