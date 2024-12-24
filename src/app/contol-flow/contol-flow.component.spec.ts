import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContolFlowComponent } from './contol-flow.component';

describe('ContolFlowComponent', () => {
  let component: ContolFlowComponent;
  let fixture: ComponentFixture<ContolFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContolFlowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContolFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
