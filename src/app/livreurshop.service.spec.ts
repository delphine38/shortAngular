import { TestBed } from '@angular/core/testing';

import { LivreurshopService } from './livreurshop.service';

describe('LivreurshopService', () => {
  let service: LivreurshopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivreurshopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
