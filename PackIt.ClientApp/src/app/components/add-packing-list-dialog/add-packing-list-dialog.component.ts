import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';

interface AddPackingListDialogData {
  name: string;
  gender: 'male' | 'female';
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
    MatRadioModule,
  ],
  templateUrl: './add-packing-list-dialog.component.html',
  styleUrl: './add-packing-list-dialog.component.scss',
})
export class AddPackingListDialogComponent {
  packingListForm = this.formBuilder.group({
    name: ['', Validators.required],
    gender: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', Validators.required],
    days: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddPackingListDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddPackingListDialogData
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.packingListForm.invalid) {
      this.dialogRef.close();
    } else {
      this.dialogRef.close(this.packingListForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  getErrorMessage(fieldName: string) {
    let field = this.packingListForm.get(fieldName);

    if (field?.hasError('required')) {
      return `The ${fieldName} is required`;
    }

    // Add other error types as needed
    // if (field.hasError('minlength')) {
    //   return 'The value is too short';
    // }

    return '';
  }

  checkForErrorsIn(formControl: AbstractControl): string {
    if (formControl.hasError('required')) {
      return 'Min value is required';
    }

    if (formControl.hasError('min') || formControl.hasError('max')) {
      return 'Value must be between 1980 and 2020';
    }
    return '';
  }
}
