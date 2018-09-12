import { Component, Input, Output, EventEmitter } from "../../../node_modules/@angular/core";
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
    
     callPercentSplitterMethod() : number[] {
        let sum = 0;
        let percentSplitted: Array<number> = [];
        for (var j = 0; j < this.expenses.length; j++) {
            sum += this.expenses[j].expense;
        }
        for(var i=0; i<this.friends.length; i++){
            percentSplitted[i] = sum*((this.friends[i].weightageAssigned)/100);
            //alert(this.friends[i].weightageAssigned);
            //this.friends[i].percentPay = percentSplitted[i];
        }
        var weightsSum = 0;
        for(var i=0; i< this.friends.length; i++){  //5
            weightsSum += this.friends[i].weightageAssigned;
        }
        if(weightsSum!=100){
            alert('Weight assigned to all friends should be equal to 100%!!');
        }
        else{
            this.notify.emit(percentSplitted);
        }
        return percentSplitted;
    }

    @Output() notify: EventEmitter<any> = new EventEmitter<any>();
}