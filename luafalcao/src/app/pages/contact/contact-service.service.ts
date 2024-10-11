import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {

  constructor(private http: HttpClient) { }

  sendContact(contactData: any): Observable<string> {
    return this.http.post('https://1hqy3bq760.execute-api.us-west-1.amazonaws.com/contact/send', contactData, { responseType: 'text' })
      .pipe(
        map((response: any) => response as string)
      );
  }
}