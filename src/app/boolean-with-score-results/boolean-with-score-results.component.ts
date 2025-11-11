import { CommonModule, NgClass } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { QuestionAngular, SurveyModule } from 'survey-angular-ui';
import { defaultCss, QuestionBooleanModel } from 'survey-core';
import { CustomRendererComponents } from '../_utils/detailed-scores.entities';
import { ExtendedQuestionsModel } from '../_utils/extended-questions.model';
import { surveyAnswers } from '../_utils/survey.json';

@Component({
  selector: `${CustomRendererComponents.booleanQuestion}`,
  templateUrl: './boolean-with-score-results.component.html',
  styleUrl: './boolean-with-score-results.component.scss',
  imports: [
    SurveyModule,
    CommonModule
  ]
})
export class BooleanWithScoreResultsComponent extends QuestionAngular<ExtendedQuestionsModel> {
  disabledCssClass = defaultCss.radiogroup.itemDisabled;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
  ) {
    super(changeDetectorRef);
  }

  get questionAnswer(): string {
    return surveyAnswers[this.model.name] as string;
  }

  getCheckedClass(checked: boolean): Record<string, boolean> {
    return { [defaultCss.radiogroup.itemChecked]: checked };
  }
}
