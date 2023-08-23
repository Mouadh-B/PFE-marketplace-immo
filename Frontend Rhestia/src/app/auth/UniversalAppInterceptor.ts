import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UniversalAppInterceptor implements HttpInterceptor {

// intercept les requets
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders({
      'Authorization':`Bearer ${token}`
    })

    if(token!=null){
      const clonedRequst = req.clone({headers:headers});
      return next.handle(clonedRequst).pipe(tap(()=>{},
        (err:any)=>{

        }))
    }
    else {
      const clonedRequst = req.clone();
      return next.handle(clonedRequst).pipe(tap(()=>{},
        (err:any)=>{

        }))
    }

  }

}
