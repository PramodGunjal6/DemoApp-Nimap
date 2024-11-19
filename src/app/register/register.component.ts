import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
 
    registrationForm: FormGroup;
  
    interests: string[] = [];
  
    constructor(private fb: FormBuilder, private router: Router) {
      this.registrationForm = this.fb.group({
        firstName: [
          '',
          [Validators.required, Validators.pattern('^[A-Za-z]{1,20}$')],
        ],
        age: [20],
        addressType: [''],
        address1: [''],
        address2: [''],
        interests: [''],
        photo: [null, Validators.required],
      });
    }
  
    onAddInterest(event: Event): void {
      const keyboardEvent = event as KeyboardEvent;  
      const input = keyboardEvent.target as HTMLInputElement | null;  
      if (input && input.value) {
        const interest = input.value;
        console.log(interest);
      }
    }
    
    
  
    onRemoveInterest(interest: string): void {
      this.interests = this.interests.filter((i) => i !== interest);
    }
  
    onSubmit(): void {
      if (this.registrationForm.valid) {
        const userData = {
          ...this.registrationForm.value,
          interests: this.interests,
        };
        localStorage.setItem('userData', JSON.stringify(userData));
        this.router.navigate(['/profile']);
      }
    }
    onFileSelect(event: Event): void {
      const input = event.target as HTMLInputElement;
      if (input?.files && input.files.length > 0) {
        const file = input.files[0];
        this.registrationForm.patchValue({ photo: file });
      }
        
    }
  }
  