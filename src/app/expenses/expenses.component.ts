import { Component, OnInit } from '@angular/core';
import { IExpenses } from '../common/expenses';
import { ExpensesService } from './expenses.service';

@Component({
  //selector: 'app-expenses',
  templateUrl: './expenses.component.html',
})
export class ExpensesComponent implements OnInit {
  pageTitle: string = "Expense List";
  errorMessage: string;

  expenses: IExpenses[];
  private newAttribute: any = {};
  
  constructor(private expensesService: ExpensesService) {}

  ngOnInit(): void {
    this.expensesService.getExpenses().subscribe(
      expenses => {
        this.expenses = expenses;
      },
      error => this.errorMessage = <any>error //<any> = casting operator
    );
  }

    

    addFieldValue() {
        this.expenses.push(this.newAttribute)
        this.newAttribute = {};
        // if(this.newAttribute == '' || this.newAttribute == undefined){
        //   alert('Cannot Add Empty Input');
        // }
        for(let i=0;i< this.expenses.length; i++){
          if(this.expenses[i].expenseName == '' || this.expenses[i].expense == null || this.expenses[i].expenseDate == null ){
            alert('Should not Input Empty Values!!!');
            break;
          }
        }
    }

    emptyNameVal(): void{
      for(let i=0;i< this.expenses.length; i++){
        
      }
    }

    deleteFieldValue(index) {
        this.expenses.splice(index, 1);
    }

}
