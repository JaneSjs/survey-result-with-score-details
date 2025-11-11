import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SurveyModule } from 'survey-angular-ui';
import { defaultCss } from 'survey-core';
import { QuestionType } from '../_utils/detailed-scores.entities';
import { ExtendedItemValue, ExtendedQuestionSelectBase } from '../_utils/extended-questions.model';
import { surveyAnswers } from '../_utils/survey.json';

@Component({
  selector: 'app-choice-with-score-results',
  templateUrl: './choice-with-score-results.component.html',
  styleUrl: './choice-with-score-results.component.scss',
  imports: [
    CommonModule,
    SurveyModule
  ]
})
export class ChoiceWithScoreResultsComponent {
  @Input() question!: ExtendedQuestionSelectBase;
  @Input() model!: ExtendedItemValue;

  textCssClass = defaultCss.radiogroup.controlLabel;
  disabledCssClass = defaultCss.radiogroup.itemDisabled;

  get questionType(): string {
    const questionType: QuestionType | undefined =
      this.question?.getType() as QuestionType;

    return questionType === QuestionType.checkboxQuestion
      ? 'checkbox'
      : 'radio';
  }

  get questionAnswer (): string | string[]  {
    return surveyAnswers[this.question.name] as  string | string[];
  }

  get isChoiceSelected(): boolean {
    if (this.questionAnswer instanceof Array) {
      return this.questionAnswer.includes(this.model.value)
    } else if (typeof this.questionAnswer === 'string') {
      return this.questionAnswer === this.model.value;
    }

    return false;
  }

  get scoreContainerClasses(): Record<string, boolean> {
    return {
      [this.disabledCssClass]: !this.isChoiceSelected,
      ['selected-choice']: this.isChoiceSelected,
    };
  }
}
