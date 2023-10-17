import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RcValidarcorreoPage } from './rc-validarcorreo.page';

describe('RcValidarcorreoPage', () => {
  let component: RcValidarcorreoPage;
  let fixture: ComponentFixture<RcValidarcorreoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RcValidarcorreoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
