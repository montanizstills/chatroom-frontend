import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Message} from 'src/app/models/message'

@Injectable({
  providedIn: 'root'
})

export class ChatService {

  constructor(private http:HttpClient) { }

  sendChatMessage(message:Message){
    try{
      return this.http.post<Message>("http://localhost:8080/messaging/", message);
    }
    catch(error){
      console.log(error);
    } 
  }
  
}
