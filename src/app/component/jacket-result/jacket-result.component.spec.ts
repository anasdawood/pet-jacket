import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JacketResultComponent } from './jacket-result.component';

describe('JacketResultComponent', () => {
  let component: JacketResultComponent;
  let fixture: ComponentFixture<JacketResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JacketResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JacketResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
