import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, tap } from 'rxjs/operators';

import { IExpenses } from '../common/expenses';

@Injectable({
    providedIn: 'root'
})

export class ExpensesService{
  private expenseUrl = 'src/api/expenses/exp.json';
  constructor(private http: HttpClient){ //injecting 'HttpClient' Service instance into variable 'http'

  }
    getExpenses(): Observable<IExpenses[]>{
           return this.http.get<IExpenses[]>(this.expenseUrl).pipe(
           tap(data => console.log('All: '+ JSON.stringify(data))),
           catchError(this.handleError)
         );
        //return this.http.get<IExpenses[]>(this.expenseUrl);
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