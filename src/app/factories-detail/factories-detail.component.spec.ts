import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoriesDetailComponent } from './factories-detail.component';

describe('FactoriesDetailComponent', () => {
  let component: FactoriesDetailComponent;
  let fixture: ComponentFixture<FactoriesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FactoriesDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FactoriesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
