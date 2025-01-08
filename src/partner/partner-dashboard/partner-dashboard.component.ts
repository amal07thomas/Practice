import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadData } from 'src/app/store/data.action';
import { DataState } from 'src/app/store/data.reducer';
import { selectData } from 'src/app/store/data.selector';

@Component({
  selector: 'app-partner-dashboard',
  templateUrl: './partner-dashboard.component.html',
  styleUrls: ['./partner-dashboard.component.scss']
})
export class PartnerDashboardComponent {
  userList$ : Observable<any> | undefined;
  constructor(private titleService: Title,
    private store : Store<DataState>
  ){}
  ngOnInit(){
    this.titleService.setTitle('Partner Page');
    this.userList$ =  this.store.select(selectData);
  }

  

}
