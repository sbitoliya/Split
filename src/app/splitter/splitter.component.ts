import { Component, OnInit } from '@angular/core';
import { IExpenses } from '../common/expenses';
import { IFriends } from '../common/friends';
import { ExpensesService } from '../expenses/expenses.service';
import { SplitterService } from './splitter.service';
import { NormalSplitter } from './normal-split.component';

@Component({
  templateUrl: './splitter.component.html',
  //directives: [ NormalSplitter ]
})

export class SplitterComponent implements OnInit {
  pageTitle = 'Split Expenses';
  public splitedExpense: number;
  expenses: IExpenses[];
  friends: IFriends[];
  private newAttribute: any = {};
  errorMessage: string;
  showNormalTable: boolean = false;
  showPercentTable: boolean = false;

  constructor(private expensesService: ExpensesService, 
    private splitterService: SplitterService) {}

  ngOnInit(): void {
     this.expensesService.getExpenses().subscribe(
       expenses => {
         this.expenses = expenses;
       },
       error => this.errorMessage = <any>error //<any> = casting operator
     );
     this.splitterService.getFriends().subscribe(
      friends => {
        this.friends = friends;
      },
      error => this.errorMessage = <any>error
    );
   }

    addFieldValue() {
        this.friends.push(this.newAttribute)
        this.newAttribute = {};
        this.callSplitterMethod();
    }

    deleteFieldValue(index) {
        this.friends.splice(index, 1);
        this.callSplitterMethod();
    }
      
    onNotify(splitExpense:number):void {
      //alert(splitExpense);
      this.splitedExpense = splitExpense;
    }

    callSplitterMethod() : number {
      let sum = 0;
      for (var i = 0; i < this.expenses.length; i++) {
          sum+= this.expenses[i].expense;
      }
      let splitExpense = sum/(this.friends.length);
      this.splitedExpense = splitExpense; //to modify data on screen
      return splitExpense;
    }
    
    normalSplit(): void{
      this.showNormalTable = true;
      this.showPercentTable = false;
    }

    percentSplit(): void{
      this.showPercentTable = true;
      this.showNormalTable = false;
    }

}
