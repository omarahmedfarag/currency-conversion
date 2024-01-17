import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvervionComponent } from './convervion.component';

describe('ConvervionComponent', () => {
  let component: ConvervionComponent;
  let fixture: ComponentFixture<ConvervionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvervionComponent]
    });
    fixture = TestBed.createComponent(ConvervionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
