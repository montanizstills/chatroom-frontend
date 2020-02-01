import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Account} from '../models/account';
import { AccountService } from 'src/services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private accountService:AccountService){
  }

  ngOnInit() {}

  signInOrUp = false;
  username='';
  password='';
  email='';
  emptyUsername='';
  emptyPassword='';
  emptyEmail='';
  signed=false;
  
  validate(username:string,password:string,email:string){
    this.username=username;
    this.password=password;
    this.email=email; 
    if(this.emptyUsername!=username&&this.emptyPassword!=password&&this.emptyEmail!=email){
      this.signInOrUp=false;
      }
      else if (this.emptyUsername!=username&&this.emptyPassword!=password){
        this.signed=true;
        this.signInOrUp=true;
      }
     else{
       this.signed=false;}
  }

  onSubmit(login:NgForm){
    let account = new Account(this.username,this.password,this.email);
    console.log(this.email);
    if(this.email){      
      this.accountService.createAccount(account).subscribe(result=>{
        console.log("Account created!")
      });
    }
  }
}