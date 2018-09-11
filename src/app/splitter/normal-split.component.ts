import { Component, Input, Output, EventEmitter } from "../../../node_modules/@angular/core";
import { IExpenses } from "../common/expenses";
import { IFriends } from "../common/friends";

@Component({
    selector: 'normal-split',
    templateUrl: './normal-split.component.html'
  })

export class NormalSplitter{
    @Input() expenses: IExpenses[];
    @Input() friends: IFriends[];
    errorMessage: string;

    callSplitterMethod() : number {
        let sum = 0;
        for (var i = 0; i < this.expenses.length; i++) {
            sum+= this.expenses[i].expense;
        }
       
        //let totalfriends = 0;
        //for (var j = 0; j < this.friendArray.length; j++) {
         // totalfriends+= this.friendArray[i].index;
        //}
         let splitExpense = sum/(this.friends.length);

        this.notify.emit(splitExpense);
        return splitExpense;
      }

      @Output() notify: EventEmitter<number> = new EventEmitter<number>();
      
}