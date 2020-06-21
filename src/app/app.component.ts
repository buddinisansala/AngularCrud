import { Component } from '@angular/core';
import { CommonService } from './common.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular9Crud';
  allUser: Object;
  isEdit = false;
  userObj ={
    name: '',
    salary: '',
    age: ''
  }

  constructor(private commonService:CommonService){}
ngOnInit(){
  this.getLatestUser();
}

  addUser(fromObj){
    console.log(fromObj)
    this.commonService.createUser(fromObj).subscribe((response)=>{
      this.getLatestUser();
    })
  }

  getLatestUser(){
    this.commonService.getAllUser().subscribe((response)=>{
      this.allUser = response
    })
  }

  editUser(user){
    this.isEdit = true;
    this.userObj = user;
  }

  deleteUser(user){
    this.commonService.deleteUser(user).subscribe(()=>{
      this.getLatestUser();
    })
  }

  updateUser(user){
    this.isEdit = !this.isEdit;
    this.commonService.updateUser(this.userObj).subscribe(()=>{
      this.getLatestUser();
    })
  }

}
