import { Component, OnInit } from '@angular/core';
import { FacultyService } from '../../faculty.service';
@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.css']
})
export class FacultyDashboardComponent implements OnInit {
  myData : any;
  constructor(private facultyservice: FacultyService) { }

  ngOnInit() {
    let obs=this.facultyservice.getDashboard();
    obs.subscribe(data =>{this.myData = data.toString()}); 
  }

}
