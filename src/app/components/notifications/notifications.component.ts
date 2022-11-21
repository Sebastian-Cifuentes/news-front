import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.sass']
})
export class NotificationsComponent implements OnInit {

  message!: string;
  constructor(
  ) { }

  ngOnInit(): void {
    this.message = localStorage.getItem('message')!;
  }



}
