import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ContactListComponent } from './contact-list/contact-list.component';

const routes: Routes = [
  {
    path: '',
    component: ChatListComponent,
  },
  {
    path: 'contact-list',
    component: ContactListComponent
  },
  {
    path: 'chat-detail',
    component: ChatDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
