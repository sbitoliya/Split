import { ComponentFixture, TestBed } from "../../../node_modules/@angular/core/testing";
import { ExpensesComponent } from "./expenses.component";
import { NO_ERRORS_SCHEMA } from "../../../node_modules/@angular/core";
import { ExpensesService } from "./expenses.service";
import { of } from "../../../node_modules/rxjs/internal/observable/of";
import { By } from "../../../node_modules/@angular/platform-browser";

describe('ExpensesComponent (shallow tests)', () => {
    let fixture:ComponentFixture<ExpensesComponent>;
    let mockExpensesService;
    let EXPENSES;

    beforeEach(() => {
        EXPENSES = [
                { expenseId:1 , expenseName: 'Flat Rent',
                    expense:8000, expenseDate: '31-03-2016',
                    friendsAssociated: [{friendName: 'Shruti'},
                                        {friendName: 'Anshita'}, 
                                        {friendName: 'Malvika'}]
                },
                { expenseId: 2, expenseName: 'Maid Expenses',
                    expense: 2000, expenseDate: '31-03-2016',
                    friendsAssociated: [{friendName: 'Trapti'},
                                        {friendName: 'Niyanta'}]
                }
        ]

        mockExpensesService = jasmine.createSpyObj(['getExpenses'])

        TestBed.configureTestingModule({
            declarations: [ExpensesComponent],
            providers: [
                {provide: ExpensesService, useValue: mockExpensesService}
            ],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(ExpensesComponent);
    });

    it('should set expenses correctly for service',() => {
        mockExpensesService.getExpenses.and.returnValue(of(EXPENSES))
        fixture.detectChanges();

        expect(fixture.componentInstance.expenses.length).toBe(2);
    });

    it('should create one td for each element inside expenses + 4 Actions', () => {
        mockExpensesService.getExpenses.and.returnValue(of(EXPENSES))
        fixture.detectChanges();

        expect(fixture.debugElement.queryAll(By.css('td')).length).toBe(19);
    });

})
