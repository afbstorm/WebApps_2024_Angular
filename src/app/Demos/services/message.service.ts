import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private message: string = 'Nouveau message';
  constructor() { }

  getMessage(): string {
    return this.message;
  }

  setMessage(messageToSet: string): void {
    this.message = messageToSet
  }
}
