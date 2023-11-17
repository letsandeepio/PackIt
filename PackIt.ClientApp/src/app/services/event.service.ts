import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PackingListService {
  constructor(private http: HttpClient) {}

  getPackingLists(): Observable<Event[]> {
    return this.http.get<Event[]>('http://localhost:5296/api/PackingList');
  }
}
