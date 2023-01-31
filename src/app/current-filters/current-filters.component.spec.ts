import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentFiltersComponent } from './current-filters.component';

describe('CurrentFiltersComponent', () => {
  let component: CurrentFiltersComponent;
  let fixture: ComponentFixture<CurrentFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentFiltersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
