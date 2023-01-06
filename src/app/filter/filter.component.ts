import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { map, Observable, startWith } from 'rxjs';
import { Option } from '../models/option';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  myControl = new FormControl<string | Option>('');

  private _option: Option | undefined = undefined;
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
  }
}
