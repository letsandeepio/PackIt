import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

interface AddPackingListDialogData {
  name: string;
  description: string;
}

@Component({
  selector: 'app-add-packing-list-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
  ],
  templateUrl: './add-packing-list-dialog.component.html',
  styleUrl: './add-packing-list-dialog.component.scss',
})
export class AddPackingListDialogComponent {
  packingListForm = this.formBuilder.group({
    name: ['', Validators.required],
    description: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddPackingListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddPackingListDialogData
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // Process the form data here
  }

  onCancel(): void {
    // Handle cancel action
  }
}
