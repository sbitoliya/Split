import { Component, Input } from "../../../node_modules/@angular/core";
import { IExpenses } from "../common/expenses";
import { IFriends } from "../common/friends";

@Component({
    selector: 'percent-split',
    templateUrl: './percent-split.component.html'
  })

export class PercentSplitter{
    @Input() expenses: IExpenses[];
    @Input() friends: IFriends[];
    errorMessage: string;
    
    // callPercentSplitterMethod() : number {
    //     let sum = 0;
    //     for (var i = 0; i < this.expenses.length; i++) {
    //         sum+= this.expenses[i].expense;
    //     }
       
    //     let splitExpense = sum/(this.friends.length);
    //     return splitExpense;
    //   }
}