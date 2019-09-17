import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownWidgetComponent } from './dropdown-widget.component';

describe('DropdownWidgetComponent', () => {
  let component: DropdownWidgetComponent;
  let fixture: ComponentFixture<DropdownWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownWidgetComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
