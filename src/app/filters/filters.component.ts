import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable, of, startWith } from 'rxjs';
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
  options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];


  countries: Country[] = [];
  filteredCountries: Observable<Country[]> = new Observable();

  relatedCountries: Country[] = [];

  selectedCountries: number[] = [];
  selectedRelatedCountries: number[] = [];

  countryFormControl = new FormControl('');
  relatedCountryFormControl = new FormControl('');

  chips : Country[] = [];
  searchResults: any[] = [];

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
        const url = localStorage.getItem('search_url');
        this.loadMainResult(url || '');
      } else {
        localStorage.setItem('search_url', this.makeUrl());
        this.router.navigateByUrl(`?${this.makeUrl()}`);
      }
    });
  }

  displayFn(country: Country): string {
    return country && country.name ? country.name : '';
  }

  private _filter(name: string): Country[] {
    const filterValue = name.toLowerCase();

    return this.countries.filter(option => option.name.toLowerCase().includes(filterValue));
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
          const name = typeof value === 'string' ? value : value?.name;
          return name ? this._filter(name as string) : this.countries.slice();
        }),
      );
    });
  }

  onCountryChange(c: MatAutocompleteSelectedEvent) {
    console.log('DEBUG: selected countries', c, this.selectedCountries);
    this.chips = [...this.countries.filter(c => this.selectedCountries.includes(c.id))];
    localStorage.setItem('search_url', this.makeUrl(this.selectedCountries));
    this.router.navigateByUrl(`?${this.makeUrl(this.selectedCountries)}`);
  }

  makeUrl(dims: number[] = []): string {
    const d = dims.join("+");
    const optional = (d: string) => d ? `N=0+${d}` : `N=0`;
    // 'N=0&Nr=AND(3,10)&Nu=global_rollup_key&Np=2&Nao=10&Nty=0&Ns=sort_date_common|1'
    const url = `${optional(d)}&Nr=AND(3,10)&Nu=global_rollup_key&Np=2&Nao=10&Nty=0&Ns=sort_date_common|1`;
    return url;
  }

  loadMainResult(url: string) {
    this.endecaService.queryUrl(url).subscribe(res => {
      const r = res.records.map(
        (r: Result) => r.records?.map((rr: Result) => {
          return {
            title: rr?.properties?.global_title[0]
          }
        })
        ).flat();

        const s = new Set(r);
        this.searchResults = Array.from(s);
        console.log('DEBUG: result', this.searchResults);
      });
    }

}

interface Result {
  records?: Result[];
  properties?: {
    global_title: string[]
  }
}



interface Country {
  id: number;
  name: string;
}
