import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAdvertComponent } from './main-advert.component';

describe('MainAdvertComponent', () => {
  let component: MainAdvertComponent;
  let fixture: ComponentFixture<MainAdvertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainAdvertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAdvertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
