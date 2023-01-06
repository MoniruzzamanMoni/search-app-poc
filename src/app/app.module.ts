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
const appConfigFactory = (appConfigService: AppConfigService) => {
  return () => appConfigService.loadAppConfig();
};

@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent,
    FiltersComponent,
    FilterComponent
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
