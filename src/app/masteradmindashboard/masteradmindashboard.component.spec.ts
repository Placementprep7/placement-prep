import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasteradmindashboardComponent } from './masteradmindashboard.component';

describe('MasteradmindashboardComponent', () => {
  let component: MasteradmindashboardComponent;
  let fixture: ComponentFixture<MasteradmindashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasteradmindashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasteradmindashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
