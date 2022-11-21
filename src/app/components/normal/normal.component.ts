import { Component, Input, OnInit } from '@angular/core';
import { MatChipList } from '@angular/material/chips';
import { Publication } from '../../interfaces/publication.interface';

@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.sass']
})
export class NormalComponent implements OnInit {

  @Input() publication!: Publication;

  constructor() { }

  ngOnInit(): void {
  }

}
