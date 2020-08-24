import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoringAllComponent } from './monitoring-all.component';

describe('MonitoringAllComponent', () => {
  let component: MonitoringAllComponent;
  let fixture: ComponentFixture<MonitoringAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitoringAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoringAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
