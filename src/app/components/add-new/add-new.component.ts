import { Component, Inject, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { Publication } from 'src/app/interfaces/publication.interface';
import { PublicationService } from 'src/app/services/publication.service';
import { NotificationsService } from 'src/app/services/notifications.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.sass']
})
export class AddNewComponent implements OnInit {

  form!: FormGroup;

  get images(): FormArray {
    return this.form.get('images') as FormArray;
  }

  get publicationType(): AbstractControl {
    return this.form.get('publicationType')!;
  }

  constructor(
    public dialogRef: MatDialogRef<AddNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private readonly fb: FormBuilder,
    private readonly activatedRoute: ActivatedRoute,
    private readonly _publicationService: PublicationService,
    private readonly _notificationsService: NotificationsService,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      publicationType: ['', [Validators.required, Validators.minLength(5)]],
      desc: ['', [Validators.required, Validators.minLength(5)]],
      tags: ['', [Validators.required]],
      images: this.fb.array([])
    })
  }

  addImage(carousel: boolean) {
    this.images.push(
      this.fb.group({
        title: ['', carousel ? [Validators.required, Validators.minLength(3)] : []],
        image: ['', [Validators.required, Validators.minLength(5)]]
      })
    )
  }

  checkPublication(e: MatSelectChange) {
    this.clearImages();
    if (e.value === 'carousel') {
      this.addImage(true);
    } else {
      this.addImage(false);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.form.value.tags = this.form.value.tags.split(',').map((t: string) => t = t.trim()).filter((t: string) => t !== '');
    const { ...breakingNew }: Publication = this.form.value;
    breakingNew.createdAt = new Date();
    
    this._publicationService.create(breakingNew)
    .subscribe(({publication}) => {
        this._notificationsService.openSnackBar('Publicación publicada!');
        this.dialogRef.close(publication);
      });
  }

  clearImages() {
    (this.form.controls['images']! as FormArray).clear();
  }


}
