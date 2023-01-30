import { Injectable } from '@angular/core';
import { Dimension } from '../models/dimension';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private params: Map<number, Dimension> = new Map();

  public addParam(dim: Dimension) {
    if (!this.params.has(dim.id)) {
      this.params.set(dim.id, dim);
    }
  }

  public removeParam(dim: Dimension) {
    this.params.delete(dim.id);
  }

  public getNavigations(): number[] {
    return [...this.params.keys()];
  }

  public getNavigationsString(): string {
    return this.getNavigations().join('+');
  }

  public getNavigationDims() : Dimension[] {
    return [...this.params.values()];
  }
}
