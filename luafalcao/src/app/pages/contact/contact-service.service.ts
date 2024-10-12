import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor(private http: HttpClient) { }

  sendContact(contactData: any): Observable<any> {
    return this.http.post('https://ronremzc83.execute-api.us-west-1.amazonaws.com/dev/contact', contactData)
      .pipe(
        map((response: any) => response)
      );
  }
}