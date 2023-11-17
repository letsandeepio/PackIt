import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackingListTableComponent } from './packing-list-table.component';

describe('PackingListTableComponent', () => {
  let component: PackingListTableComponent;
  let fixture: ComponentFixture<PackingListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PackingListTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PackingListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
