import { Component } from '@angular/core';
import { UsersDataService } from '../service/users-data.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent {
 // user : any;
  users: any ;

  getUsers(usersDataService : UsersDataService) {
    usersDataService.users().subscribe((userArray) => {
      this.users = userArray;
      console.log("Already present users to be shown in form : ", this.users);
    })
  }

  constructor(private usersDataService: UsersDataService ){
    this.getUsers(usersDataService);
  }

  submit(login:any){
    this.usersDataService.saveUser(login.form.value).subscribe((rersult) => {
      console.log("Result after adding", rersult);
     this.getUsers(this.usersDataService);
    });
    
  }
   deleteUsersData(id:number){
    
       this.usersDataService.deleteUser(id).subscribe(() =>{
       this.getUsers(this.usersDataService);
  
     })
    }

} 
