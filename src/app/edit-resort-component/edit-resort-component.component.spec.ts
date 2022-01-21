import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResortComponentComponent } from './edit-resort-component.component';

describe('EditResortComponentComponent', () => {
  let component: EditResortComponentComponent;
  let fixture: ComponentFixture<EditResortComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditResortComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditResortComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
