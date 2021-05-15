import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';

import { IQuestion } from '../models/question';
import { AdvanceSearchService } from '../services/advance-search.service';
import { ISearchParam } from '../models/searchParam';

@Injectable({
  providedIn: 'root',
})
export class QuestionsResolverService implements Resolve<IQuestion[]> {
  constructor(private _searchService: AdvanceSearchService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IQuestion[]> | Promise<IQuestion[]> | IQuestion[] {
    //get parametrs from route and create Search param to call get API
    const searchParam: ISearchParam = {
      q: route.queryParams['q'],
      accepted: route.queryParams['accepted'],
      answers: route.queryParams['answers'],
      body: route.queryParams['body'],
      closed: route.queryParams['closed'],
      migrated: route.queryParams['migrated'],
      notice: route.queryParams['notice'],
      nottaged: route.queryParams['nottaged'],
      title: route.queryParams['title'],
      user: route.queryParams['user'],
      url: route.queryParams['url'],
      views: route.queryParams['views'],
      wiki: route.queryParams['wiki'],
    };
    return this._searchService.search(searchParam);
  }
}
