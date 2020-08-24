import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllServersComponent } from './view-all-servers.component';

describe('ViewAllServersComponent', () => {
  let component: ViewAllServersComponent;
  let fixture: ComponentFixture<ViewAllServersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllServersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
