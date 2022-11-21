import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotificationsComponent } from '../components/notifications/notifications.component';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  
  durationInSeconds = 4;

  constructor(
    private readonly _snackBar: MatSnackBar,
  ) { }

  openSnackBar(message: string) {
    localStorage.setItem('message', message);
    this._snackBar.openFromComponent(NotificationsComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
