import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCpcComponent } from './new-cpc.component';

describe('NewCpcComponent', () => {
  let component: NewCpcComponent;
  let fixture: ComponentFixture<NewCpcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCpcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
