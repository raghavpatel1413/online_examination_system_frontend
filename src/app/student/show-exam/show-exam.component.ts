import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, Validators, FormControl ,FormBuilder } from '@angular/forms';
import { StudentService } from '../../student.service';

@Component({
  selector: 'app-show-exam',
  templateUrl: './show-exam.component.html',
  styleUrls: ['./show-exam.component.css']
})
export class ShowExamComponent implements OnInit {
  listexamform: FormGroup;
  public obj;
  constructor(private formBuilder: FormBuilder, private studentservice : StudentService) { }

  ngOnInit() {
    this.listexamform = this.formBuilder.group({
  });
    this.select();
  }
  get f() { return this.listexamform.controls; }
  select(){
    let obs=this.studentservice.getexamlist("2");
    obs.subscribe(data=>this.obj=data);
    obs.subscribe(data=>{console.log(data)});
  }
}
