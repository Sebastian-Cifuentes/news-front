import { ChangeDetectionStrategy, Component, Host, Input, OnInit, Optional, SkipSelf } from '@angular/core';
import { inject } from '@angular/core/testing';
import {ControlContainer, FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.sass'],
})
export class AddImageComponent implements OnInit {

  @Input() isCarousel!: boolean;

  form!: FormGroup;

  constructor(
    @Host() @SkipSelf() @Optional()
    public readonly controlContainer: ControlContainer
  ) { }

  ngOnInit(): void {
    this.form = this.controlContainer?.control as FormGroup;
  }

  get images() {
    return this.controlContainer.control?.get('images') as FormArray;
  }

  deleteImage(i: number) {
    this.images.removeAt(i);
  }

}
