import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Advice } from '../core/models/advice'
import { AdviceComponent } from './advice.component';
import { DebugElement } from '@angular/core';
import { provideRouter } from '@angular/router';

describe('AdviceComponent', () => {

  let component: AdviceComponent;
  let fixture: ComponentFixture<AdviceComponent>;
  let debugEl: DebugElement;
  let expectedAdvice: Advice = { slip: { id: 2, advice: 'fake advice'}}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdviceComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();

    fixture.componentRef.setInput('advice', expectedAdvice)
    await fixture.whenStable();
  });

  it('should display the advice', () => {});

  // Use spy
  it('should redirect to the hate page', () => {});
});
