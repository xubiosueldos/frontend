import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SelectorElement } from './selector-default.component';

@Injectable({
  providedIn: 'root'
})
export class SelectorService {
  href = '/api/helper/helpers';

  constructor(private http: HttpClient) { }

  public async getSelector(paramhlp: string): Promise<SelectorElement[]> {
    const requestUrl =
      `${this.href}/${paramhlp}`;

    let selector: SelectorElement[];
    selector = await this.http.get<SelectorElement[]>(requestUrl).toPromise();

    return selector;
  }

}
