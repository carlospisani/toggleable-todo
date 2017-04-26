import { TestBed, inject } from '@angular/core/testing';

import { TgRouterService } from './tg-router.service';

describe('TgRouterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TgRouterService]
    });
  });

  it('should ...', inject([TgRouterService], (service: TgRouterService) => {
    expect(service).toBeTruthy();
  }));
});
