import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FollowThePathComponent } from './follow-the-path.component';
import { provideRouter } from '@angular/router';
import { DebugElement } from '@angular/core';

describe('FollowThePathComponent', () => {

  let component: FollowThePathComponent;
  let fixture: ComponentFixture<FollowThePathComponent>;
  let debugEl: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ provideRouter([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FollowThePathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugEl = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display 5 <a> tags', () => {
    const links = debugEl.nativeElement.querySelectorAll("a");
    expect(links.length).toBe(5);
  });

  it('should have proper link to home page', () => {
    const link = debugEl.nativeElement.querySelector('a');
    expect(link.getAttribute("href")).toBe("/home");
  });
});
