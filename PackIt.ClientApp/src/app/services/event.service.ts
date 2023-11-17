import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PackingList } from '../models/packinglist.model';

@Injectable({
  providedIn: 'root',
})
export class PackingListService {
  constructor(private http: HttpClient) {}

  getPackingLists(): Observable<PackingList[]> {
    console.log('I worked');

    return this.http.get<PackingList[]>(
      'http://localhost:5296/api/PackingList'
    );
  }
}
