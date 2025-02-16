import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ParamHaterComponent } from './param-hater.component';
import { ActivatedRoute } from '@angular/router';

describe('ParamHaterComponent', () => {
  let component: ParamHaterComponent;
  let fixture: ComponentFixture<ParamHaterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ParamHaterComponent], 
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { id: "42" } }
          }
        }
      ]
    });

    fixture = TestBed.createComponent(ParamHaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display advice id', () => {
    expect(component.id).toBe(42);
  });
});
