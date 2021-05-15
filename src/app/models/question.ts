import { IOwner } from './owner';

export interface IQuestion {
  tags: string[];
  owner: IOwner;
  isAnswered: boolean;
  viewCount: number;
  answerCount: number;
  score: number;
  lastActivityDate: number;
  creationDate: number;
  lastEditDate: number;
  questionId: number;
  contentLicense: string;
  link: string;
  title: string;
}
