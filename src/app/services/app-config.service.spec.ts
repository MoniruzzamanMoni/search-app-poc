import { environment } from '../../environments/environment';
import { TestBed } from '@angular/core/testing';
import { AppConfigService } from './app-config.service';
import {
  HttpTestingController,
  HttpClientTestingModule
} from '@angular/common/http/testing';

// Todo: Add mock config object
const mockAppConfig: any = {}

describe('AppConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AppConfigService]
    });
  });

  describe('loadAppConfig', () => {
    let httpTestingController: HttpTestingController;
    let appConfigService: AppConfigService;
    beforeEach(() => {
      httpTestingController = TestBed.inject(HttpTestingController);
      appConfigService = TestBed.inject(AppConfigService);
    });

    it('should load app config data', () => {
      appConfigService.loadAppConfig().then(() => {
        expect(appConfigService.config).toEqual(mockAppConfig);
      });
      const request = httpTestingController.expectOne(environment.config);
      request.flush(mockAppConfig);
      httpTestingController.verify();
    });
  });
});
