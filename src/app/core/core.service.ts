import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  sendEmail(arg0: { to: string; subject: string; body: string; }) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
