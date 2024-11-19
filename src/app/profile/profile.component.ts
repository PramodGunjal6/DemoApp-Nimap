import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user = { firstName: '', photo: '', interests: [] };
  isEditing = false;

  editProfile() {
    this.isEditing = true;
  }

  saveProfile() {
    this.isEditing = false;
    // Save profile logic
  }

  editPhoto() {
    // Allow photo editing logic
  }
}
