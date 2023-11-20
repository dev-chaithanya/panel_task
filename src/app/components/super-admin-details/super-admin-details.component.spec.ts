import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminDetailsComponent } from './super-admin-details.component';

describe('SuperAdminDetailsComponent', () => {
  let component: SuperAdminDetailsComponent;
  let fixture: ComponentFixture<SuperAdminDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperAdminDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuperAdminDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
