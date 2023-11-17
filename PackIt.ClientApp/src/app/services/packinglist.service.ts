import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PackingList } from '../models/packinglist.model';

export interface AddPackingListRequest {
  id: string;
  name: string;
  gender: number;
  days: number;
  localization: {
    country: string;
    city: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PackingListService {
  constructor(private http: HttpClient) {}

  private readonly BASE_URL = 'http://localhost:5296/api/PackingList';

  getPackingLists(): Observable<PackingList[]> {
    return this.http.get<PackingList[]>(this.BASE_URL);
  }

  deletePackingList(id: string): Observable<any> {
    return this.http.delete<any>(`${this.BASE_URL}/${id}`);
  }

  addPackingList(
    packingListRequest: AddPackingListRequest
  ): Observable<PackingList> {
    console.log('sending request');

    return this.http.post<PackingList>(this.BASE_URL, packingListRequest);
  }
}
