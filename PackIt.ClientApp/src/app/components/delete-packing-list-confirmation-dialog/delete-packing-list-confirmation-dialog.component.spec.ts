import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePackingListConfirmationDialogComponent } from './delete-packing-list-confirmation-dialog.component';

describe('DeletePackingListConfirmationDialogComponent', () => {
  let component: DeletePackingListConfirmationDialogComponent;
  let fixture: ComponentFixture<DeletePackingListConfirmationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletePackingListConfirmationDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeletePackingListConfirmationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
