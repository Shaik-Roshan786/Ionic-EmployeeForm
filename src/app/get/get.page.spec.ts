import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetPage } from './get.page';

describe('GetPage', () => {
  let component: GetPage;
  let fixture: ComponentFixture<GetPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
