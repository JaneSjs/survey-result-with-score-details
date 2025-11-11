import {
  ItemValue,
  QuestionBooleanModel,
  QuestionSelectBase,
} from 'survey-core';

export interface ExtendedQuestionsModel extends QuestionBooleanModel {
  yesScore: number;
  noScore: number;
}


export interface ExtendedQuestionSelectBase extends QuestionSelectBase {
  choices: ExtendedItemValue[];
}

export interface ExtendedItemValue extends ItemValue {
  score?: number;
}
