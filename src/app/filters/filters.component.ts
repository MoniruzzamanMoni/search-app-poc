import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { EndecapodService } from '../services/endecapod.service';
import { Country } from '../models/country';
import { CollectionService } from '../services/collection.service';
import { Filter, FilterType } from '../models/filter';
import { Option } from '../models/option';
import { SearchEventBusService } from '../services/search-event-bus.service';
import { SearchEvent, SearchEventType } from '../models/search-event/search-event';

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

  constructor(
    private endecaService: EndecapodService,
    private collectionService: CollectionService,
    private searchEventBus: SearchEventBusService
    ) {

  }

  ngOnInit() {

    this.searchEventBus.on(SearchEventType.AddFilter).subscribe((evt: SearchEvent) => {
      console.log('event: ', evt);
    })
    // Todo: Need to decide what collection is selected.
    const filters = this.collectionService.getFilters(0);

    filters.forEach(f => {
      if (f.type === FilterType.SSELECT) {
        this.endecaService.queryUrl(
          this.makeExposeUrl(f.N as number)
        ).subscribe(res => {
          const r = res['dimensions'].find((d: any) => d.id === f.N);

          if (!f.option) {
            f.option = <Option>{id: f.N, name: '', multi: f.type === FilterType.MSELECT, disabled: true};
          }
          console.log('F: ', f);
          if (f.option) {
            f.option.values = r.values;
            f.option.name = r.name;
          }
      });
      }
    });
    this.filters = filters;
  }


  makeExposeUrl(dim: number): string {
    const url = `N=0&Ne=${dim}&Nr=AND(3,10)&Nu=global_rollup_key&Np=2&Nty=0&Ns=sort_date_common|2`;
    return url;
  }
}


