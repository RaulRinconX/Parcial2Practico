/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GolesListComponent } from './goles-list.component';

describe('GolesListComponent', () => {
  let component: GolesListComponent;
  let fixture: ComponentFixture<GolesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GolesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GolesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
