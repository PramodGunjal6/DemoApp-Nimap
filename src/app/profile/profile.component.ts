import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
    userData: any = JSON.parse(localStorage.getItem('userData') || '{}');
  
    editMode = false;
  
    onEdit(): void {
      this.editMode = true;
    }
  
    onSave(): void {
      localStorage.setItem('userData', JSON.stringify(this.userData));
      this.editMode = false;
    }
  }
  