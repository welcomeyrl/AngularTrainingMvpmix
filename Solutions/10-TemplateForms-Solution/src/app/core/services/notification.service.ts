import { Injectable } from '@angular/core';
import { NotificationMessage } from '../../shared/models/notification-message.model';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class NotificationService {
  private notificationSubject: Subject<NotificationMessage> = new Subject<NotificationMessage>();
  notificationObservable: Observable<NotificationMessage>;

  constructor() {
    this.notificationObservable = this.notificationSubject.asObservable();
  }

  notify(messageType: string, messageData?: any) {
    this.notificationSubject.next(<NotificationMessage>{messageType: messageType, messageData: messageData});
  }
}
