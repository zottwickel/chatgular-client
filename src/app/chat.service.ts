import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private socket: Socket) { }

  public sendMessage(message: string) {
    this.socket.emit('chat message', message);
  }

  public getMessages = () => {
    return this.socket.fromEvent('chat message')
      .pipe(map((data: any) => {
        return data
      }));
  }
}
