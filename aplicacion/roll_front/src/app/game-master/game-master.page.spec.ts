import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameMasterPage } from './game-master.page';

describe('GameMasterPage', () => {
  let component: GameMasterPage;
  let fixture: ComponentFixture<GameMasterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GameMasterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
