import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

export interface DialogData {
  packingListName: string;
  confirm: boolean;
}

@Component({
  selector: 'app-delete-packing-list-confirmation-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './delete-packing-list-confirmation-dialog.component.html',
  styleUrl: './delete-packing-list-confirmation-dialog.component.scss',
})
export class DeletePackingListConfirmationDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeletePackingListConfirmationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
