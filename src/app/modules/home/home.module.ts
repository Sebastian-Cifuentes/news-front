import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { DynamicComponentDirective } from '../../directives/dynamic-component.directive';
import { ComponentsModule } from '../../components/components.module';
import { PublicationsResolver } from 'src/app/resolvers/publication.resolver';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: { publications: PublicationsResolver }

  }
];

@NgModule({
  declarations: [
    HomeComponent,
    DynamicComponentDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
