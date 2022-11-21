import { AfterViewInit, Component, OnInit, ViewChild, ComponentRef, ViewRef } from '@angular/core';
import { DynamicComponentDirective } from '../../directives/dynamic-component.directive';
import { NormalComponent } from '../../components/normal/normal.component';
import { MatDialog } from '@angular/material/dialog';
import { AddNewComponent } from 'src/app/components/add-new/add-new.component';
import { Publication } from '../../interfaces/publication.interface';
import { ActivatedRoute } from '@angular/router';
import { SlideshowComponent } from '../../components/slideshow/slideshow.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild(DynamicComponentDirective) dynamic!: DynamicComponentDirective;
  publications!: Publication[];
  loading = true;

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      // this.generateComponent();
      this.getPublications();
    }, 1);
  }

  generateComponent(publication: Publication, isNew: boolean): void {
    const viewContainerRef = this.dynamic.viewContainerRef;
    
    if (publication?.publicationType === 'normal') {
      const componentRef: ComponentRef<NormalComponent> = viewContainerRef.createComponent(NormalComponent);
      const normalComponent: NormalComponent = componentRef.instance;
      normalComponent.publication = publication;
    } else {
      const component2Ref: ComponentRef<SlideshowComponent> = viewContainerRef.createComponent<any>(SlideshowComponent);
      const slideShowComponent: SlideshowComponent = component2Ref.instance;
      slideShowComponent.publication = publication;
    }

    if (isNew) {
      const c: ViewRef = viewContainerRef.get(viewContainerRef.length - 1 )!;
      viewContainerRef.move(c, 0);
    }

  }

  getPublications() {
    this.loading = true;
    this.activatedRoute.data.subscribe(({publications}) => {
      this.publications = publications;
      this.generateComponents();
      this.loading = false
    });
  }

  generateComponents() {
    this.publications.forEach((publication: Publication) => {
      this.generateComponent(publication, false);
    });
  }

  addPublication(publication: Publication) {
    this.publications.unshift(publication)
    this.activatedRoute.snapshot.data['publications'] = this.publications;
  }

  createModal() {
    const dialogRef = this.dialog.open(AddNewComponent, {
      width: '500px',
      height: 'auto',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.addPublication(result);
        this.generateComponent(result, true);
      }
    });
  }

}
