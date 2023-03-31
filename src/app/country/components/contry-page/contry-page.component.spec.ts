import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContryPageComponent } from './contry-page.component';

describe('ContryPageComponent', () => {
  let component: ContryPageComponent;
  let fixture: ComponentFixture<ContryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContryPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
