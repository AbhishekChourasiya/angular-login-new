import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WuiegywreComponent } from './wuiegywre.component';

describe('WuiegywreComponent', () => {
  let component: WuiegywreComponent;
  let fixture: ComponentFixture<WuiegywreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WuiegywreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WuiegywreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
