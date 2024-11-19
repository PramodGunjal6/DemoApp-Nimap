import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from './register/register.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo-app';
  constructor(private dialog: MatDialog) {}

  openRegister(): void {
    this.dialog.open(RegisterComponent, {
      width: '600px',
      height: 'auto',
    });
  }
}
