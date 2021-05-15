import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionsComponent } from './questions/questions.component';
import { SearchComponent } from './search/search.component';
import { QuestionsResolverService } from './questions/questionsResolver.service';
import { QuestionDetaisComponent } from './questions/question-detais/question-detais.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'search', component: SearchComponent },
  {
    path: 'questions',
    component: QuestionsComponent,
    resolve: { questions: QuestionsResolverService },
  },
  { path: 'questions/details', component: QuestionDetaisComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
