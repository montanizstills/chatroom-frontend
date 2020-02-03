import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/services/chat.service';
import { Message } from '../models/message';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private chatService:ChatService) { }

  ngOnInit() {
  }

  bodyTextAreaValue='';

  sendMessage(){
    console.log(this.bodyTextAreaValue)
    this.chatService.sendChatMessage( new Message("", this.bodyTextAreaValue) ).subscribe(result=>{
      result = new Message(result.id,result.message)
      this.bodyTextAreaValue= result.getMessage();
    });
  }

}
