import { Injectable } from '@angular/core';

export interface ChatMessage {
  id: string;
  from: string;
  to: string;
  text: string;
  sentAt: string; // ISO
}

@Injectable({ providedIn: 'root' })
export class ChatService {
  // TODO: replace with real SDK or HttpClient calls when available
  async listRecent(conversationId: string, limit = 20): Promise<ChatMessage[]> {
    return []; // placeholder
  }

  async send(conversationId: string, text: string): Promise<ChatMessage> {
    return {
      id: crypto.randomUUID(),
      from: 'me',
      to: 'them',
      text,
      sentAt: new Date().toISOString()
    };
  }
}