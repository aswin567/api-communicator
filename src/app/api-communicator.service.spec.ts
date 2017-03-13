import { TestBed, inject } from '@angular/core/testing';

import { ApiCommunicatorService } from './api-communicator.service';

describe('ApiCommunicatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiCommunicatorService]
    });
  });

  it('should ...', inject([ApiCommunicatorService], (service: ApiCommunicatorService) => {
    expect(service).toBeTruthy();
  }));
});
