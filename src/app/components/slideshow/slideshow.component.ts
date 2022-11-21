import { Component, Input, OnInit } from '@angular/core';
import { Publication } from '../../interfaces/publication.interface';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.sass']
})
export class SlideshowComponent implements OnInit {

  @Input() publication!: Publication;

  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  
  constructor() { }

  ngOnInit(): void {
  }

}
