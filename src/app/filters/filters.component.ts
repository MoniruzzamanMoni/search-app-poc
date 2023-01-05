import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { EndecapodService } from '../services/endecapod.service';

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

  constructor(
    private endecaService: EndecapodService,
    private router: Router,
    private route: ActivatedRoute
    ) {

  }

  ngOnInit() {
    this.route.queryParamMap.subscribe(p => {
      if (p.keys.length > 0) {
        this.loadCountries();
        // const url = localStorage.getItem('search_url');
      } else {
        localStorage.setItem('search_url', this.makeUrl());
        this.router.navigateByUrl(`?${this.makeUrl()}`);
      }
    });
  }

  displayFn(country: Country): string {
    return country && country.name ? country.name : '';
  }

  private _filter(country: Country): Country[] {
    const filterValue = country?.name?.toLowerCase();
    const selectedIds = this.selectedCountries.map(c => c.id);
    const notSelected = (option: Country) => !selectedIds.includes(option.id);
    return !filterValue ? this.countries.filter(option => notSelected(option)) :
      this.countries.filter(option => option.name.toLowerCase().includes(filterValue) && notSelected(option));
  }

  loadCountries() {
    const url = "N=0&Ne=603291&Nr=AND(3,10)&Nu=global_rollup_key&Np=2&Nty=0&Ns=sort_date_common|2";
    this.endecaService.queryUrl(url)
    .subscribe(res => {
      this.countries = res.dimensions.find((x: Country) => x.id === 603291).values;
      console.log('DEBUG: countries', this.countries);
      this.filteredCountries = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => {
          return this._filter(value as Country);
        }),
      );
    });
  }

  onCountryChange(c: MatAutocompleteSelectedEvent) {
    this.selectedCountries.push(c.option.value);
    console.log('DEBUG: selected countries', c, this.selectedCountries);
    localStorage.setItem('search_url', this.makeUrl(this.selectedCountries.map(c => c.id)));
    this.router.navigateByUrl(`?${this.makeUrl(this.selectedCountries.map(c => c.id))}`);
  }

  makeUrl(dims: number[] = []): string {
    const d = dims.join("+");
    const optional = (d: string) => d ? `N=0+${d}` : `N=0`;
    // 'N=0&Nr=AND(3,10)&Nu=global_rollup_key&Np=2&Nao=10&Nty=0&Ns=sort_date_common|1'
    const url = `${optional(d)}&Nr=AND(3,10)&Nu=global_rollup_key&Np=2&Nao=10&Nty=0&Ns=sort_date_common|1`;
    return url;
  }



}

// interface Result {
//   records?: Result[];
//   properties?: {
//     global_title: string[]
//   }
// }



interface Country {
  id: number;
  name: string;
}
