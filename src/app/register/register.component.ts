import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<RegisterComponent>
  ) {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern('^[A-Za-z]{1,20}$')]],
      age: [18, Validators.required],
      addressType: ['Home', Validators.required],
      address1: [''],
      address2: [''],
      photo: [null, Validators.required],
      interests: [[]]
    });
  }

  submitForm() {
    if (this.registerForm.valid) {
      // Handle form submission logic
      this.dialogRef.close(); // Close the dialog on successful submission
    }
  }

  // removeInterest(i: number) {
  //   const interests = this.registerForm.get('interests')?.value;
  //   interests?.splice(i, 1);  // Use optional chaining to avoid null errors
  //   this.registerForm.get('interests')?.setValue(interests);
  // }
  removeInterest(i: number): void {
    const interests = this.registerForm.get('interests')?.value;
    if (interests) {
      interests.splice(i, 1);  // Removes the interest at index `i`
      this.registerForm.get('interests')?.setValue(interests);  // Updates the value in the form
    }
  }
  
  
  
  

  onFileChange(event: any) {
    const file = event.target.files[0];
    // Validate file size (310x325 px)
    if (file && file.size > 310 * 325) {
      alert('File size exceeds limit');
      return;
    }
    this.registerForm.patchValue({ photo: file });
  }
}
