import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceRecipeComponent } from './interface-recipe.component';

describe('InterfaceRecipeComponent', () => {
  let component: InterfaceRecipeComponent;
  let fixture: ComponentFixture<InterfaceRecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InterfaceRecipeComponent]
    });
    fixture = TestBed.createComponent(InterfaceRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
