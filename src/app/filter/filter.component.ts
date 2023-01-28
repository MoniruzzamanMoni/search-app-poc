import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { map, Observable, startWith } from 'rxjs';
import { Option } from '../models/option';
import { SearchEvent, SearchEventType } from '../models/search-event/search-event';
import { EndecapodService } from '../services/endecapod.service';
import { SearchEventBusService } from '../services/search-event-bus.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  private _option: Option | undefined = undefined;

  constructor(
    private searchEventBus: SearchEventBusService,
    private endeca: EndecapodService,
    private searchService: SearchService
    ) {

  }



  myControl = new FormControl<string | Option>('');

  filteredOptions: Observable<Option[] | undefined> = new Observable();
  @Input()
  set option(val: Option | undefined) {
    this._option = val;
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this.filter(value as Option))
    );
  }

  get option(): Option | undefined {
    return this._option;
  }

  selectedOptions: Option[] = [];

  @Output()
  optionChange = new EventEmitter<any>();

  private filter(opt: Option): Option[] | undefined {
    const filterValue = opt?.name?.toLowerCase();
    const selectedIds = this.selectedOptions.map((c) => c.id);
    const notSelected = (option: Option) => !selectedIds.includes(option.id);

    return !filterValue
      ? this._option?.values.filter((option) => notSelected(option))
      : this._option?.values.filter(
          (option) =>
            option.name.toLowerCase().includes(filterValue) &&
            notSelected(option)
        );
  }

  displayFn(opt: Option): string {
    return opt && opt.name ? opt.name : '';
  }

  onChange(c: MatAutocompleteSelectedEvent) {
    this.selectedOptions.push(c.option.value);
    this.optionChange.emit(c.option.value);
    this.searchService.addParam(c.option.value);
    this.searchEventBus.publish({type: SearchEventType.AddFilter, data: c.option.value});

  }
}
