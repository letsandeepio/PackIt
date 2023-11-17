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
    return this.http.get<PackingList[]>(
      'http://localhost:5296/api/PackingList'
    );
  }

  deletePackingList(id: string): Observable<any> {
    return this.http.delete<any>('http://localhost:5296/api/PackingList/' + id);
  }

  addPackingList(packingList: PackingList): Observable<PackingList> {
    return this.http.post<PackingList>(
      'http://localhost:5296/api/PackingList',
      packingList
    );
  }
}
