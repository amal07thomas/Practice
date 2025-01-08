import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadData } from 'src/app/store/data.action';
import { DataState } from 'src/app/store/data.reducer';
import { selectData } from 'src/app/store/data.selector';

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent {
  userList$ : Observable<any> | undefined;
constructor(private titleService: Title,
  private store : Store<DataState>
){}
ngOnInit(){
  this.titleService.setTitle('Customer Page');
  this.store.dispatch(loadData());
  this.userList$ =  this.store.select(selectData);
}

}
