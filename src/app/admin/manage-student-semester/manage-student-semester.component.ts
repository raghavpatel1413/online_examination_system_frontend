import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, Validators, FormControl ,FormBuilder } from '@angular/forms';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-manage-student-semester',
  templateUrl: './manage-student-semester.component.html',
  styleUrls: ['./manage-student-semester.component.css']
})
export class ManageStudentSemesterComponent implements OnInit {
  managedepartmentform: FormGroup;
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
  }

  select(){
    let obs=this.adminservice.getstudentdata();
    obs.subscribe((response)=>console.log(response));
  }
}
