import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetpasswordPageComponent } from './resetpassword-page.component';

describe('ResetpasswordPageComponent', () => {
  let component: ResetpasswordPageComponent;
  let fixture: ComponentFixture<ResetpasswordPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetpasswordPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResetpasswordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
