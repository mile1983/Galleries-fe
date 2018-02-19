import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGaleryComponent } from './create-galery.component';

describe('CreateGaleryComponent', () => {
  let component: CreateGaleryComponent;
  let fixture: ComponentFixture<CreateGaleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGaleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGaleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
