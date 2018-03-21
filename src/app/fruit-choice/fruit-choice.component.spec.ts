import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitChoiceComponent } from './fruit-choice.component';

describe('FruitChoiceComponent', () => {
  let component: FruitChoiceComponent;
  let fixture: ComponentFixture<FruitChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
