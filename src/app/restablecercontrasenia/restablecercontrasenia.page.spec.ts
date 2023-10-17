import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RestablecercontraseniaPage } from './restablecercontrasenia.page';

describe('RestablecercontraseniaPage', () => {
  let component: RestablecercontraseniaPage;
  let fixture: ComponentFixture<RestablecercontraseniaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RestablecercontraseniaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
