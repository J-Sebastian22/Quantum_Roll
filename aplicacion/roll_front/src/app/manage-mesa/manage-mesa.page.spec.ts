import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageMesaPage } from './manage-mesa.page';

describe('ManageMesaPage', () => {
  let component: ManageMesaPage;
  let fixture: ComponentFixture<ManageMesaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
