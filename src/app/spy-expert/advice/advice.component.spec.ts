import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AdviceComponent } from "./advice.component";
import { DebugElement } from "@angular/core";
import { provideRouter } from "@angular/router";
import { Router } from "@angular/router";
import { Advice } from "../core/models/advice";
import { By } from "@angular/platform-browser";

describe("AdviceComponent", () => {

  let component: AdviceComponent;
  let fixture: ComponentFixture<AdviceComponent>;
  let debugEl: DebugElement;
  let expectedAdvice: Advice = { slip: { id: 2, advice: "fake advice" }};
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    routerSpy = jasmine.createSpyObj("Router", ["navigate"]);

    await TestBed.configureTestingModule({
      providers: [
        { provide: Router, useValue: routerSpy },
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdviceComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    fixture.detectChanges();

    fixture.componentRef.setInput("advice", expectedAdvice);
    await fixture.whenStable();
    fixture.detectChanges();
  });

  it("should display the advice", () => {
    const quoteEl = debugEl.query(By.css(".quote"));
    expect(quoteEl.nativeElement.textContent).toContain(expectedAdvice.slip.advice);
  });

  it("should redirect to the hate page ", () => {
    const buttonEl = debugEl.query(By.css("button"));
    buttonEl.triggerEventHandler("click", null);
    expect(routerSpy.navigate).toHaveBeenCalledWith(["/hate", expectedAdvice.slip.id]);
  });
});
