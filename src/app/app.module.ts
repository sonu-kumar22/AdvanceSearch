import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { QuestionsComponent } from './questions/questions.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { QuestionDetaisComponent } from './questions/question-detais/question-detais.component';

@NgModule({
  declarations: [AppComponent, SearchComponent, QuestionsComponent, QuestionDetaisComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    PaginationModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
