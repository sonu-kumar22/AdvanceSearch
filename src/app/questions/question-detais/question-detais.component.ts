import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IQuestion } from 'src/app/models/question';

@Component({
  selector: 'app-question-detais',
  templateUrl: './question-detais.component.html',
  styleUrls: ['./question-detais.component.scss'],
})
export class QuestionDetaisComponent implements OnInit {
  question: IQuestion;
  lastActive: string;
  asked: string;
  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    //get passed question from question view through route
    this.question = history.state.data;
    if (this.question) {
      //setting when question was asked and last updated
      this.asked = `${this.getDifferenceInMonths(this.question.creationDate)}`;
      this.lastActive = `${this.getDifferenceInMonths(
        this.question.lastActivityDate
      )}`;
    }
  }

  //route back to question list view
  navigateToList() {
    this._router.navigate(['../'], { relativeTo: this._route });
  }

  //get Years amd Months between today and passed date
  getDifferenceInMonths(milliseconds): string {
    const miliseconds = Date.now() - milliseconds;
    const seconds = Math.floor(miliseconds / 1000);
    const years = seconds / (60 * 60 * 24 * 365);
    const numberOfMonths = Math.trunc(years * 12);
    return `${Math.floor(numberOfMonths / 12)} years ${
      numberOfMonths % 12 == 0 ? '' : (numberOfMonths % 12) + ' months'
    }`;
  }
}
