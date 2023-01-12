import { Component, OnInit } from '@angular/core';
import { AppConfigData } from '../models/app-config-data';
import { Dimension } from '../models/dimension';
import { AppConfigService } from '../services/app-config.service';
import { EndecapodService } from '../services/endecapod.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{
  private categoryUrl = 'N=0&Ne=7487&Nr=AND(3,10)&Nu=global_rollup_key&Np=2&Nty=0&Ns=sort_date_common|1';
  private appConfigData: AppConfigData;
  category: Dimension = {id: 7487}
  constructor(
    private endeca: EndecapodService,
    private appConfigService: AppConfigService
  ) {
    this.appConfigData = new AppConfigData(this.appConfigService.config);
  }

  ngOnInit(): void {
    this.endeca.queryUrl(this.categoryUrl).subscribe(res => {
      this.category.values =  res['dimensions'].find((d: Dimension) => d.id === 7487).values;
      console.log('Categories: ', this.category);
      this.category.values?.sort((a, b) => this.appConfigData.sortCollection(a, b));
    })
  }
}
