import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../_service/common-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public user = {
  email: '',
  password: ''
}
  constructor(private commonService: CommonServiceService) { }

  ngOnInit() {
  }

  onLoginSubmit(){
    console.log(this.user);
    // this.commonService.loginService('login', this.user).subscribe(response => {
    //   console.log(response);
    // },error=>{
    //   console.log(error)
    // })
  }

}
