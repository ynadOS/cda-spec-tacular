import { TestBed } from '@angular/core/testing';
import { AdvicesService } from './core/services/advices/advices.service';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { of, throwError } from 'rxjs';
import { Advice } from './core/models/advice';

describe('SpyExpertComponent', () => {
  let adviceService: AdvicesService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });

    httpTesting = TestBed.inject(HttpTestingController);
    adviceService = TestBed.inject(AdvicesService);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('should return expected advice (httpclient called once)', () => {
    const expectedAdvice: Advice = {slip: { id: 1, advice: 'Stay positive!'} };

    // Simulate the HTTP call
    spyOn(adviceService, 'getAdvice').and.returnValue(of(expectedAdvice));

    adviceService.getAdvice().subscribe((data: Advice) => {
      expect(data).toEqual(expectedAdvice, 'expected advice');
    });

    // Ensure that the HTTP method was called once
    expect(adviceService.getAdvice).toHaveBeenCalledTimes(1);
  });

  it('should properly handle request error', () => {
    const errorResponse = new ErrorEvent('Network error');

    // Simulate the HTTP call error
    spyOn(adviceService, 'getAdvice').and.returnValue(throwError(() => errorResponse));

    adviceService.getAdvice().subscribe({
      next: () => fail('expected an error, not advice'),
      error: (error) => expect(error).toEqual(errorResponse),
    });

    // Ensure that the HTTP method was called once
    expect(adviceService.getAdvice).toHaveBeenCalledTimes(1);
  });
});
