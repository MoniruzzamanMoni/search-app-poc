import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialExampleModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopicsComponent } from './topics/topics.component';
import { FiltersComponent } from './filters/filters.component';
import { RouterModule } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { AppConfigService } from './services/app-config.service';
import { TopicTreeComponent } from './topic-tree/topic-tree.component';
// const appConfigFactory = (appConfigService: AppConfigService) => {
//   return () => appConfigService.loadAppConfig();
// };
import { ResultListComponent } from './result-list/result-list.component';
import { CategoriesComponent } from './categories/categories.component';
import { ResultListItemComponent } from './result-list-item/result-list-item.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchOptionMenuComponent } from './search-option-menu/search-option-menu.component';
import { SearchAdvancedComponent } from './search-advanced/search-advanced.component';
import { CurrentFiltersComponent } from './current-filters/current-filters.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent,
    FiltersComponent,
    FilterComponent,
    TopicTreeComponent,
    ResultListComponent,
    CategoriesComponent,
    ResultListItemComponent,
    ResultListComponent,
    SearchOptionMenuComponent,
    SearchAdvancedComponent,
    CurrentFiltersComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    // {provide: APP_INITIALIZER, useFactory: appConfigFactory, multi: true, deps: [AppConfigService]},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
