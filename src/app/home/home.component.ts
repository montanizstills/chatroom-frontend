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

  sendMessage(message:String){
    this.chatService.sendChatMessage( new Message("", message) ).subscribe(result=>{
      console.log(result)
      document.getElementById('bodyTextArea').innerHTML='';
      // document.getElementById('bodyTextArea').innerHTML=result;
    });
  }

}
