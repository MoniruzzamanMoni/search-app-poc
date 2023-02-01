import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import { filter, Observable } from 'rxjs';
import { EndecapodService } from '../services/endecapod.service';
import { Country } from '../models/country';
import { CollectionService } from '../services/collection.service';
import { Filter, FilterType } from '../models/filter';
import { Option } from '../models/option';
import { SearchEventBusService } from '../services/search-event-bus.service';
import { SearchEvent, SearchEventType } from '../models/search-event/search-event';
import { SearchService } from '../services/search.service';
import { Dimension } from '../models/dimension';

export interface User {
  name: string;
}

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent  implements OnInit {
  myControl = new FormControl<string | Country>('');
  countries: Country[] = [];
  filteredCountries: Observable<Country[]> = new Observable();
  selectedCountries: Country[] = [];
  filters: Filter[] = [];
  private defaultCategory: Dimension = {id: 0};


  private loadResultOn = {
    [SearchEventType.AddFilter]: true,
    [SearchEventType.RemoveFilter]: true,
    [SearchEventType.CategoryChange]: true
  };
  constructor(
    private endecaService: EndecapodService,
    private collectionService: CollectionService,
    private searchEventBus: SearchEventBusService,
    private searchService: SearchService
    ) {

  }

  ngOnInit() {
    this.searchEventBus.on()
    .pipe(
      filter((evt: SearchEvent) => this.loadResultOn[evt.type])
    ).subscribe((evt: SearchEvent) => {
      const cat: Dimension  = evt.type === SearchEventType.CategoryChange  && evt.data ? evt.data : this.defaultCategory;
      this.loadFilterValues(this.collectionService.getFilters(cat.id));
    })
    // Todo: Need to decide what collection is selected.
    this.loadFilterValues(this.collectionService.getFilters(this.defaultCategory.id));

  }

  private loadFilterValues(filters: Filter[]) {
    filters.forEach(f => {
      if (f.type === FilterType.SSELECT) {
        this.endecaService.queryUrl(
          this.makeExposeUrl(f.N as number)
        ).subscribe(res => {
          const r = res['dimensions'].find((d: any) => d.id === f.N);

          if (!f.option) {
            f.option = <Option>{id: f.N, name: '', multi: f.type === FilterType.MSELECT, disabled: true};
          }
          if (f.option) {
            f.option.values = r?.values || [];
            f.option.name = r.name;
          }
      });
      }
    });
    this.filters = filters;
  }


  makeExposeUrl(dim: number): string {
    const nav = this.searchService.getNavigationsString();
    const url = `N=${nav || '0'}&Ne=${dim}&Nr=AND(3,10)&Nu=global_rollup_key&Np=2&Nty=0&Ns=sort_date_common|2`;
    return url;
  }
}


