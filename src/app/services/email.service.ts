import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor( private http : HttpClient) { }
  
  sendEmail(data:AbstractControl["value"]): Observable<any> {
    const email = data
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post('https://formspree.io/f/mrgjyjza', // formspree.io  mail form action api key
        { name: email.name, replyto: email.email, message: email.message },
        { 'headers': headers });
  }

}
