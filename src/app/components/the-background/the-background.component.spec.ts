import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheBackgroundComponent } from './the-background.component';

describe('TheBackgroundComponent', () => {
  let component: TheBackgroundComponent;
  let fixture: ComponentFixture<TheBackgroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheBackgroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
