import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ChatsComponent} from './chats/chats.component';
import {ServiceslistComponent} from './serviceslist/serviceslist.component';
// import { AppComponent } from './app.component';

const routes: Routes = [
    {
      path:'',
      redirectTo: 'home',
      pathMatch: 'full'
//    pathMatch: 'prefix'
    },
    {
      path:'home',
      component: HomeComponent
    },
    {
    path:'services',
     component: ServiceslistComponent
    },
    {
    path:'chats',
    component: ChatsComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
