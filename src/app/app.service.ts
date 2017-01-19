import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class makeModelService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private makedataListUrl = '/makedataList';  // URL to web api
  constructor(private http: Http) { }
  getMakeDataList (){
       return this.http.get(this.makedataListUrl).toPromise().then(res => res.json());
   }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
