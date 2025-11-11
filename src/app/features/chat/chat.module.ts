import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatWindowComponent } from './components/chat-window/chat-window.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';



@NgModule({
  declarations: [
    ChatWindowComponent,
    ChatListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChatModule { }
