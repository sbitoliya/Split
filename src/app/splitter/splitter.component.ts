import { Component, OnInit } from '@angular/core';
import { IExpenses } from '../common/expenses';
import { IFriends } from '../common/friends';
import { ExpensesService } from '../expenses/expenses.service';
import { SplitterService } from './splitter.service';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  templateUrl: './splitter.component.html',
  //directives: [ NormalSplitter ]
})

export class SplitterComponent implements OnInit {
  pageTitle = 'Split Expenses';
  public splitedExpense: number;
  //public percentSplitedExpense: number[];
  expenses: IExpenses[];
  friends: IFriends[];
  private newAttribute: any = {};
  errorMessage: string;
  showNormalTable: boolean = false;
  showPercentTable: boolean = false;
  showExpPerHead: boolean = true;

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
         if(this.showNormalTable == true){
           this.showExpPerHead = false;
           //this.callSplitterMethod();
         }
    }

    deleteFieldValue(index) {
        this.friends.splice(index, 1);
         if(this.showNormalTable == true){
          this.showExpPerHead = false;
           //this.callSplitterMethod();
         }
    }
      
    onNotify(splitExpense:number):void {
      //alert(splitExpense);
      if(this.showNormalTable == true){
        this.splitedExpense = splitExpense;
        this.showExpPerHead = true;
      }
    }

    onNot(percentSplitedExp:number[]):void {
      //alert(percentSplitedExp);
      if(this.showPercentTable == true){
        for(let i=0; i<this.friends.length; i++){
          this.friends[i].percentPay = percentSplitedExp[i];
        }
        //this.percentSplitedExpense = percentSplitedExp;
      }
    }

    // callSplitterMethod() : number {
    //   let sum = 0;
    //   for (var i = 0; i < this.expenses.length; i++) {
    //       sum+= this.expenses[i].expense;
    //   }
    //   let splitExpense = sum/(this.friends.length);
    //   this.splitedExpense = splitExpense; //to modify data on screen
    //   return splitExpense;
    // }
    
    normalSplit(): void{
      this.showNormalTable = true;
      this.showPercentTable = false;
    }

    percentSplit(): void{
      this.showPercentTable = true;
      this.showNormalTable = false;
    }

    // nameValidation(): void{
    //   if(/^[A-Za-z\s]+$/.test(<IFriends>field.friendName) == true)

    //   else alert();
    // }

    
    lessThanHun(): void{
      var weightsCheck = 0;
      for(var i=0; i< this.friends.length; i++){  //5
        weightsCheck = this.friends[i].weightageAssigned;
        if(weightsCheck>100){
          alert('Weight can not be more than 100% !!!');
          break;
        }
      }
      // if(weightedSum!=100){
      //   alert('Weight assigned to all friends should be equal to 100%!!');
      // }

    }

}
