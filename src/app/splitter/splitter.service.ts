import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from 'rxjs/operators';

import { IFriends } from "../common/friends";

@Injectable({
    providedIn: 'root'
})

export class SplitterService{
  private friendsUrl = 'src/assets/friends/friends.json';
  constructor(private http: HttpClient){ //injecting 'HttpClient' Service instance into variable 'http'

  }

    getFriends(): Observable<IFriends[]>{
        return this.http.get<IFriends[]>(this.friendsUrl).pipe(
            tap(data => console.log('All:'+JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse){
      let errorMessage = '';
      if(err.error instanceof ErrorEvent){
        errorMessage = `An error occurred: ${err.error.message}`;
      }else{
        errorMessage = `Server returned code: ${err.status}, error message is : ${err.message}`;
      }
      return throwError(errorMessage);
    }
}