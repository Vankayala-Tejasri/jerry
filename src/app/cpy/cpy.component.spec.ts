import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpyComponent } from './cpy.component';

describe('CpyComponent', () => {
  let component: CpyComponent;
  let fixture: ComponentFixture<CpyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
