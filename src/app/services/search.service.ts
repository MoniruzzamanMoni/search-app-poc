import { Injectable } from '@angular/core';
import { Dimension } from '../models/dimension';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private filters: Map<number, Dimension> = new Map();
  private categories: Map<number, Dimension> = new Map();

  public addFilters(dim: Dimension) {
    if (!this.filters.has(dim.id)) {
      this.filters.set(dim.id, dim);
    }
  }

  public removeFilters(dim: Dimension) {
    this.filters.delete(dim.id);
  }

  public addCategory(dim: Dimension) {
    if (!this.categories.has(dim.id)) {
      this.categories.set(dim.id, dim);
    }
  }

  public removeCategory(dim: Dimension) {
    this.categories.delete(dim.id);
  }

  public getNavigations(): number[] {
    return [...this.filters.keys(), ...this.categories.keys()];
  }

  public getNavigationsString(): string {
    return this.getNavigations().join('+');
  }

  public getNavigationDims() : Dimension[] {
    return [...this.filters.values(), ...this.categories.values()];
  }

  public getCurrentFilters(): Dimension[] {
    return [...this.filters.values()];
  }
}

