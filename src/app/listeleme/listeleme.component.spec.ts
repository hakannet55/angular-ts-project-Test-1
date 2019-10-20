import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListelemeComponent } from './listeleme.component';

describe('ListelemeComponent', () => {
  let component: ListelemeComponent;
  let fixture: ComponentFixture<ListelemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListelemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListelemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
