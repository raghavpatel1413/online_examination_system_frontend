import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, Validators, FormControl ,FormBuilder } from '@angular/forms';
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-manage-faculty',
  templateUrl: './manage-faculty.component.html',
  styleUrls: ['./manage-faculty.component.css']
})
export class ManageFacultyComponent implements OnInit {
  managefacultyform: FormGroup;
  public obj;
  constructor(private formBuilder: FormBuilder, private adminservice: AdminService) { }

  ngOnInit() {
    this.managefacultyform = this.formBuilder.group({
  });
  this.select();
  }
  get f() { return this.managefacultyform.controls; }

  onSubmit()
  {
    if (this.managefacultyform.invalid) {
      return;
    }
    this.adminservice.insertfaculty();
  }

  select(){
    let obs=this.adminservice.getfacultydata();
    obs.subscribe(data=>this.obj=data);
  }
}
