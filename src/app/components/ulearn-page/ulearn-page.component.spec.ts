import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UlearnPageComponent } from './ulearn-page.component';

describe('UlearnPageComponent', () => {
  let component: UlearnPageComponent;
  let fixture: ComponentFixture<UlearnPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UlearnPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UlearnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
