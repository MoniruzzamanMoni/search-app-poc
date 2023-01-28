import { Injectable } from '@angular/core';
import { Dimension } from '../models/dimension';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private params: Dimension[] = [];
  public addParam(dim: Dimension) {
   this.params.push(dim);
  }

  public removeParam(dim: Dimension) {
    this.params = this.params.filter(d => d.id !== dim.id);
  }

  public getNavigations(): number[] {
    return this.params.map(d => d.id);
  }

  public getNavigationsString(): string {
    return this.getNavigations().join('+');
  }
}
