import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarperComponent } from './warper.component';

describe('WarperComponent', () => {
  let component: WarperComponent;
  let fixture: ComponentFixture<WarperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
