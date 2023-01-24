import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialExampleModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopicsComponent } from './topics/topics.component';
import { FiltersComponent } from './filters/filters.component';
import { ResultListComponent } from './result-list/result-list.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchOptionMenuComponent } from './search-option-menu/search-option-menu.component';
import { SearchAdvancedComponent } from './search-advanced/search-advanced.component';

@NgModule({
  declarations: [
    AppComponent,
    TopicsComponent,
    FiltersComponent,
    ResultListComponent,
    SearchOptionMenuComponent,
    SearchAdvancedComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
