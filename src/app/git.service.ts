import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class GitService {
  private username: string;
  url: string;

  constructor(private _http: Http) {
    this.username = '9jaswag';
   }

   getUser(): Observable<Response> {
      return this._http.get(`https://api.github.com/users/${this.username}`)
              .map((response: Response) => response.json())
              .catch(this.handleError);
              // .do(data => console.log('Data: ' + JSON.stringify(data)));
    }

  getRepos(): Observable<Response> {
    return this._http.get(`https://api.github.com/users/${this.username}/repos`)
            .map((response: Response) => response.json())
            .catch(this.handleError);
            // .do(data => console.log('Data: ' + JSON.stringify(data)));
  }

  updateUser(username: string) {
    this.username = username;
    console.log("user " + this.username );
  }

  private handleError (error: Response | any) {
    let errMessage: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMessage = `${error.status} - ${error.statusText || ''} ${err}`;
    }else{
      errMessage = error.message ? error.message : error.toString();
    }
    console.log(errMessage);
    return Observable.throw(errMessage);
  }

}
