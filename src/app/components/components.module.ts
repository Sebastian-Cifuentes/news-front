import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NormalComponent } from './normal/normal.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { AddNewComponent } from './add-new/add-new.component';
import { MaterialModule } from '../material/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddImageComponent } from './add-image/add-image.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [
    NormalComponent,
    SlideshowComponent,
    AddNewComponent,
    AddImageComponent,
    NotificationsComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    IvyCarouselModule,
    NgbModule
  ],
  exports: [
    SlideshowComponent,
    MaterialModule,
    IvyCarouselModule,
    NgbModule
  ]
  
})
export class ComponentsModule { }
