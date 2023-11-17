import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPackingListDialogComponent } from './add-packing-list-dialog.component';

describe('AddPackingListDialogComponent', () => {
  let component: AddPackingListDialogComponent;
  let fixture: ComponentFixture<AddPackingListDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddPackingListDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPackingListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
