import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent {
  constructor(private titleService: Title){}
  ngOnInit(){
    this.titleService.setTitle('Partner Prinish');
  }
}
