import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDetaisComponent } from './question-detais.component';

describe('QuestionDetaisComponent', () => {
  let component: QuestionDetaisComponent;
  let fixture: ComponentFixture<QuestionDetaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionDetaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionDetaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
