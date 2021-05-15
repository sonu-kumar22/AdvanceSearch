import { Component, OnInit } from '@angular/core';

import { AdvanceSearchService } from '../services/advance-search.service';
import { ISearchParam } from '../models/searchParam';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  booleanArray: any; //array for all booelan types
  searchParam: ISearchParam; //stores all search param in object

  constructor(
    private _searchService: AdvanceSearchService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    //Initializing to default
    this.booleanArray = [null, true, false];
    this.searchParam = {
      q: null,
      accepted: null,
      answers: null,
      body: null,
      closed: null,
      migrated: null,
      notice: null,
      nottaged: null,
      title: null,
      user: null,
      url: null,
      views: null,
      wiki: null,
    };
  }

  //create query param to call stackoverflow api based on search parameters
  onSearch() {
    const queryParameters = {};
    for (const key in this.searchParam) {
      if (this.searchParam[key]) {
        queryParameters[key] = this.searchParam[key];
      }
    }
    console.log(queryParameters);
    this._router.navigate(['questions'], { queryParams: queryParameters });
  }
}
