import { Injectable } from "@angular/core";
import { Http, Headers, Response, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";

import { User } from "../models/user";
import { BackendService } from "./backend.service";

@Injectable()
export class LoginService {
  constructor(private http: Http) { }

  register(user: User) {
    /*
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.post(
      BackendService.apiUrl + "Users",
      JSON.stringify({
        Username: user.email,
        Email: user.email,
        Password: user.password
      }),
      { headers: headers }
    )
    .catch(this.handleErrors);
    */
  }

  login(user: User) {
    let headers = new Headers();
    //headers.append( 'Content-Type', 'application/x-www-form-urlencoded' );
    //headers.append( 'Content-Type', 'application/form-data' );
    headers.append( 'Authorization', 'Basic aW52ZW50b3J5OmludmVudG9yeV9zZWNyZXQ=' );
    const body = new URLSearchParams();
        body.set( 'password', user.passw );
        body.set( 'username', user.username );
        body.set( 'grant_type', 'password' );
        body.set( 'scope', "read,write,trust" );
        body.set( 'client_secret', 'inventory_secret' );
        body.set( 'client_id', 'inventory' );
    return this.http.post(
      BackendService.apiUrl + "oauth/token",
      body,
      { headers: headers }
    )
    .map(response => response.json())
    .do(data => {
      BackendService.token = data.access_token;
    })
    .catch(
      this.handleErrors
      );
  }

  logoff() {
    BackendService.token = "";
  }

  resetPassword(email) {
    /*
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this.http.post(
      BackendService.apiUrl + "Users/resetpassword",
      JSON.stringify({
        Email: email
      }),
      { headers: headers }
    ).catch(this.handleErrors);
    */
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}
