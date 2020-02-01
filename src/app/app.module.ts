import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ChatsComponent } from './chats/chats.component';
import { HttpClientModule} from '@angular/common/http';
import { AccountService } from 'src/services/account.service';
import {ChatService} from '../services/chat.service';
import { ServiceslistComponent } from './serviceslist/serviceslist.component';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ChatsComponent,
    ServiceslistComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AccountService,ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
