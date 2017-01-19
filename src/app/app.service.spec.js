import { TestBed, async, inject } from '@angular/core/testing';
import { makeModelService } from './app.service';

describe('Service: makeModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [makeModelService]
    });
  });

  it('should be a valid service', inject([makeModelService], (service: makeModelService) => {
    expect(service).toBeTruthy();
  }));
});
