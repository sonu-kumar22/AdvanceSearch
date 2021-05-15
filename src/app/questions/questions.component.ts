import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IQuestion } from '../models/question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  questions: IQuestion[];
  originalQuestion: IQuestion[];
  questionSubSubscription: Subscription;

  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    this._route.data.subscribe((data: Data) => {
      //getting data after resolving route
      this.originalQuestion = data['questions'];
      //display only five records
      this.questions = this.originalQuestion.slice(0, 5);
    });
  }

  //when page changes through pagination display next/previous records
  pageChanged(event: any) {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.questions = this.originalQuestion.slice(startItem, endItem);
  }

  //route abck to search page
  navigateToSearch() {
    this._router.navigate(['search']);
  }
}
