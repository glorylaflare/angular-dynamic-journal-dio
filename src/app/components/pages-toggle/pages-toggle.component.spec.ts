import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesToggleComponent } from './pages-toggle.component';

describe('PagesToggleComponent', () => {
  let component: PagesToggleComponent;
  let fixture: ComponentFixture<PagesToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesToggleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
