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
const appConfigFactory = (appConfigService: AppConfigService) => {
  return () => appConfigService.loadAppConfig();
};
import { ResultListComponent } from './result-list/result-list.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent,
    FiltersComponent,
    FilterComponent,
    TopicTreeComponent,
    ResultListComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    RouterModule.forRoot([])
  ],
  providers: [
    {provide: APP_INITIALIZER, useFactory: appConfigFactory, multi: true, deps: [AppConfigService]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
