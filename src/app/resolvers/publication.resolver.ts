import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { PublicationService } from '../services/publication.service';
import { Publication } from '../interfaces/publication.interface';

@Injectable({
  providedIn: 'root'
})
export class PublicationsResolver implements Resolve<Observable<Publication[]>> {

  constructor(
    private readonly _publicationService: PublicationService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<Publication[]> {
    return this._publicationService.getAll();
  }
}
