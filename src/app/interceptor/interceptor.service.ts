import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class InterceptorService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = sessionStorage.getItem('token');
    
    let reqaut;
  let authentificationString = "Bearer "+token;
    //let authentificationString = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ0b3RvQGhvdG1haWwuY29tIiwiZXhwIjoxNjI0MDIxNTI3LCJpYXQiOjE2MjM0MTY3Mjd9.nuFsxqZb0ZFoeeg2CrkEZCMWw8zfoQ2YimXtpHWBiOqByEoDA7bn0xbB6ADrYSV6Q8rk9BKjNz3mqlcEfKrl5g";
    console.log("before: " + authentificationString);
        //token
    if (token != null) {
      console.log('is auth!');
      reqaut = req.clone({
        setHeaders : {
          "Authorization" : authentificationString,
          "Content-Type" : "application/json"
        }
      });
    } else {
      console.log('not auth!');
      reqaut = req.clone({
        setHeaders : {
          "Content-Type" : "application/json"
        }
      });
    }

    console.info("after: " + reqaut);
    return next.handle(reqaut);
  }


}
