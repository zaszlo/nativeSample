import { Injectable } from "@angular/core";
import { getString, setString } from "application-settings";

const tokenKey = "token";

export class BackendService {
  static apiUrl = "http://192.168.0.104:8080/inventory/api/";
  //static apiUrl = "http://localhost:4200/inventory/api/";

  static isLoggedIn(): boolean {
    return !!getString("token");
  }

  static get token(): string {
    return getString("token");
  }

  static set token(theToken: string) {
    setString("token", theToken);
    console.log("token set: " + theToken);
  }
}
