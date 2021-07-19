import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactedinfoComponent } from './contactedinfo.component';

describe('ContactedinfoComponent', () => {
  let component: ContactedinfoComponent;
  let fixture: ComponentFixture<ContactedinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactedinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactedinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
