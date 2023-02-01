import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs';
import { Dimension } from '../models/dimension';
import { SearchEvent, SearchEventType } from '../models/search-event/search-event';
import { SearchEventBusService } from '../services/search-event-bus.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-current-filters',
  templateUrl: './current-filters.component.html',
  styleUrls: ['./current-filters.component.css']
})
export class CurrentFiltersComponent implements OnInit{

   private loadResultOn = {
    [SearchEventType.AddFilter]: true,
    [SearchEventType.RemoveFilter]: true,
    [SearchEventType.CategoryChange]: true
  };
  data: Dimension[] = [];
  constructor(private searchService: SearchService, private searchEventBus: SearchEventBusService) {

  }

  ngOnInit(): void {

    this.searchEventBus.on().pipe(
      filter((evt: SearchEvent) => this.loadResultOn[evt.type])
    ).subscribe((evt: SearchEvent) => {
      this.data = this.searchService.getCurrentFilters();
    });
  }

  remove(dim: Dimension) {
    // this.data = this.data.filter(d => d.id !== dim.id);
    this.searchService.removeFilters(dim);
    this.searchEventBus.publish({type: SearchEventType.RemoveFilter, data: dim});
  }
}
