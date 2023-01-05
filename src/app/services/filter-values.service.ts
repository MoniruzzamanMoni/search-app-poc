import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Option } from '../models/option';

@Injectable({
  providedIn: 'root'
})
export abstract class FilterValuesService {
  abstract getValues(id: any): Observable<Option>;
}
