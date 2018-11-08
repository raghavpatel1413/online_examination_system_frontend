import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, Validators, FormControl ,FormBuilder } from '@angular/forms';
import { AdminService } from '../../admin.service';
@Component({
  selector: 'app-manage-department',
  templateUrl: './manage-department.component.html',
  styleUrls: ['./manage-department.component.css']
})
export class ManageDepartmentComponent implements OnInit {
  managedepartmentform: FormGroup;
  loading = false;
  submitted = false;
  public obj;
  constructor(private formBuilder: FormBuilder, private adminservice: AdminService) { }

  ngOnInit() {
    this.managedepartmentform = this.formBuilder.group({
      dname: ['', Validators.required],
      ddetails: ['', Validators.required]
  });
  this.select();
  }

  get f() { return this.managedepartmentform.controls; }

  onSubmit()
  {
    this.submitted = true;
    if (this.managedepartmentform.invalid) {
      return;
    }
    this.loading = true;
    this.adminservice.insertdepartment(this.f.dname.value,this.f.ddetails.value);
  }

  select(){
    let obs=this.adminservice.getdepartmentdata();
    obs.subscribe(data=>this.obj=data);
  }
}
