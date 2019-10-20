import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GosterDetayComponent } from './goster-detay.component';

describe('GosterDetayComponent', () => {
  let component: GosterDetayComponent;
  let fixture: ComponentFixture<GosterDetayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GosterDetayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GosterDetayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
