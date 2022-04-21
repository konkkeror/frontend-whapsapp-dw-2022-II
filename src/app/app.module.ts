import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { StickersListComponent } from './stickers-list/stickers-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatListComponent,
    ChatDetailComponent,
    ContactListComponent,
    UsersListComponent,
    StickersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
