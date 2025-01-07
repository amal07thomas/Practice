import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-partner-dashboard',
  templateUrl: './partner-dashboard.component.html',
  styleUrls: ['./partner-dashboard.component.scss']
})
export class PartnerDashboardComponent {
  constructor(private titleService: Title){}
  ngOnInit(){
    this.titleService.setTitle('Partner Page');
  }

}
