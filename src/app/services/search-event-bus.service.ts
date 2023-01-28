import { Injectable } from '@angular/core';
import { filter, Observable, Subject } from 'rxjs';
import { SearchEvent, SearchEventType } from '../models/search-event/search-event';

@Injectable({
  providedIn: 'root'
})
export class SearchEventBusService {

  private eventBus: Subject<SearchEvent> = new Subject();

  public publish(evt: SearchEvent) {
    this.eventBus.next(evt);
  }

  public on(evtType?: SearchEventType): Observable<SearchEvent> {
    return evtType ? this.eventBus.asObservable().pipe(filter((evt: SearchEvent) => evt.type === evtType)): this.eventBus.asObservable();
  }
}




