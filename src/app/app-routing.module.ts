import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component'
import { APP_BASE_HREF } from '@angular/common';
import { SearchOptionMenuComponent } from './search-option-menu/search-option-menu.component';
import { SearchAdvancedComponent } from './search-advanced/search-advanced.component';


const routes: Routes = [
  { path: 'search-advanced', component: SearchAdvancedComponent },
  { path: 'search-options', component: SearchOptionMenuComponent },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppRoutingModule { }
