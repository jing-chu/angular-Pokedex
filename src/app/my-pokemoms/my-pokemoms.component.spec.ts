import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPokemomsComponent } from './my-pokemoms.component';

describe('MyPokemomsComponent', () => {
  let component: MyPokemomsComponent;
  let fixture: ComponentFixture<MyPokemomsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyPokemomsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPokemomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
