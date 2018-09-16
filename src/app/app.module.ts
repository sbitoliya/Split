import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { SplitterComponent } from './splitter/splitter.component';
import { NormalSplitter } from './splitter/normal-split.component';
import { PercentSplitter } from './splitter/percent-split.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ExpensesComponent,
    SplitterComponent,
    NormalSplitter,
    PercentSplitter
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'welcome', component: WelcomeComponent },
      { path: '', component: WelcomeComponent, pathMatch: 'full'},
      { path: 'expenses', component: ExpensesComponent},
      { path: 'splitter', component: SplitterComponent}
    ])
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
