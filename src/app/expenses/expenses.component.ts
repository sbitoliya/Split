import { Component, OnInit } from '@angular/core';
import { IExpenses } from '../common/expenses';
import { ExpensesService } from './expenses.service';
import { IFriends } from '../common/friends';

@Component({
  //selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']

})
export class ExpensesComponent implements OnInit {
  pageTitle: string = "Expense List";
  errorMessage: string;
  expIndex: number;
  splittedExp: number;
  showResult: boolean = false;

  expenses: IExpenses[];
  friends: IFriends[];
  private newAttribute: any = {};
  private newFriend: any = {};
  
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
        for(let i=0;i< this.expenses.length; i++){
          if(this.expenses[i].expenseName == '' || this.expenses[i].expense == null || this.expenses[i].expenseDate == null ){
            alert('Should not Input Empty Values!!!');
            break;
          }
        }
    }

    deleteFieldValue(index) {
        this.expenses.splice(index, 1);
    }

    addValue(){
      //var e = this.expenses.indexOf;
      this.expenses[this.expIndex].friendsAssociated.push(this.newFriend);
      this.newFriend = {};
      this.showResult = false;
    }

     deleteValue(index){
    //   for(var i = 0; i<this.expenses.length; i++)
       this.expenses[this.expIndex].friendsAssociated.splice(index, 1);
       this.showResult = false;
     }

     splitIndex(index){
      this.expIndex = index;
      //alert(this.expenses[this.expIndex].friendsAssociated);
      this.friends = this.expenses[this.expIndex].friendsAssociated;
      this.showResult = false;
     }

     normalSplitFunc(){
      this.splittedExp = (this.expenses[this.expIndex].expense)/this.expenses[this.expIndex].friendsAssociated.length;
      this.showResult = true;
     }

}
