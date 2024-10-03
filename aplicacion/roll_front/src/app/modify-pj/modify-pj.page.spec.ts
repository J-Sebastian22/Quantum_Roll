import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModifyPjPage } from './modify-pj.page';

describe('ModifyPjPage', () => {
  let component: ModifyPjPage;
  let fixture: ComponentFixture<ModifyPjPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyPjPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
