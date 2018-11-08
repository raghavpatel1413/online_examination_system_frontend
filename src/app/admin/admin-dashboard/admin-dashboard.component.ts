import { Component, OnInit } from '@angular/core';  
import { AdminService } from '../../admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  myData : any;
  constructor(private adminservice:AdminService ) { }
  ngOnInit() {
    let obs=this.adminservice.getDashboard();
    obs.subscribe(data =>{this.myData = data.toString()}); 
  }
}
