import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Publication } from '../interfaces/publication.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  private urlApi = `${environment.api}/api/v1/publication` 

  constructor(
    private readonly httpClient: HttpClient
  ) { }

  create(breakingNew: Publication): Observable<{publication: Publication}> {
    if (breakingNew.publicationType === 'normal') {
      return this.httpClient.post<{publication: Publication}>(`${this.urlApi}/normal`, breakingNew);
    } else {
      return this.httpClient.post<{publication: Publication}>(`${this.urlApi}/slideshow`, breakingNew);
    }
  }

  getAll(): Observable<Publication[]> {
    return this.httpClient.get<{publications: Publication[]}>(`${this.urlApi}`)
            .pipe(
              map(({publications}) => publications)
            );
  }

}
