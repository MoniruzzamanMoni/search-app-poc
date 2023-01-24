import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchOptionMenuComponent } from './search-option-menu.component';

describe('SearchOptionMenuComponent', () => {
  let component: SearchOptionMenuComponent;
  let fixture: ComponentFixture<SearchOptionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchOptionMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchOptionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
