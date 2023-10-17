import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RcContranuevaPage } from './rc-contranueva.page';

describe('RcContranuevaPage', () => {
  let component: RcContranuevaPage;
  let fixture: ComponentFixture<RcContranuevaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RcContranuevaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
