import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { IQuestion } from '../models/question';
import { ISearchParam } from '../models/searchParam';

//basic URL without any search parameter
const baseUrl =
  'https://api.stackexchange.com/2.2/search/advanced?order=desc&sort=activity&site=stackoverflow';

@Injectable({
  providedIn: 'root',
})
export class AdvanceSearchService {
  constructor(private _http: HttpClient) {}

  //API to returned question based on search parameters
  search(searchParam: ISearchParam): Observable<IQuestion[]> {
    //creating queryparams
    let httpParams = new HttpParams();
    for (let key in searchParam) {
      if (searchParam[key])
        httpParams = httpParams.append(key, searchParam[key]);
    }

    //API call
    return this._http.get(baseUrl, { params: httpParams }).pipe(
      map((data: any) => {
        //mapping to model
        const items = data.items;
        return items.map((item: any) => {
          const question: IQuestion = {
            tags: item.tags,
            owner: {
              reputation: item.owner.reputation,
              userId: item.owner.user_id,
              userType: item.owner.user_type,
              profileImage: item.owner.profile_image,
              displayName: item.owner.display_name,
              link: item.owner.link,
            },
            isAnswered: item.is_answered,
            viewCount: item.view_count,
            answerCount: item.answer_count,
            score: item.score,
            lastActivityDate: item.last_activity_date,
            creationDate: item.creation_date,
            lastEditDate: item.last_edit_date,
            questionId: item.question_id,
            contentLicense: item.content_license,
            link: item.link,
            title: item.title,
          };
          return question;
        });
      }),
      catchError((err) => {
        return throwError(err); //error handling
      })
    );
  }
}
