import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/account';

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  constructor(private http: HttpClient) {}
   
  find():Observable<Account>{
    try{
      return this.http.get<Account>("http://localhost:8080/account/find-account");
    }
    catch(error){
      console.log(error);
    }
  }

  createAccount(account):Observable<Account>{
    try{
      console.log(account);
      return this.http.post<Account>("http://localhost:8080/account/create-account",account);
    }
    catch(error){
      console.log(error);
    }
  }
}
