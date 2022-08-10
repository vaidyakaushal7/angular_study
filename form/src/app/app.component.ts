import { Component } from '@angular/core';
import {UsersDataService} from './service/users-data.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form';
  users:any;
  constructor(private userData:UsersDataService)
  {
    userData.users().subscribe((data)=>{
      console.warn("data",data);
      this.users=data 
    });
  }
  getUserFormData(data:any)
  {
    console.warn(data)
    this.userData.saveUser(data).subscribe((data)=>{
      console.warn(data);
    })
  }
  
}
