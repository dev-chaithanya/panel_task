import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UphishPageComponent } from './uphish-page.component';

describe('UphishPageComponent', () => {
  let component: UphishPageComponent;
  let fixture: ComponentFixture<UphishPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UphishPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UphishPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
