import { IFriends } from "./friends";

export interface IExpenses{
    expenseId: number;
    expenseName: string;
    expense: number;
    expenseDate: string;
    friendsAssociated: IFriends[];
}